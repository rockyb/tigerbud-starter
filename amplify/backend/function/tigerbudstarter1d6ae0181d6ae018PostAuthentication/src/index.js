const AWS = require('aws-sdk');
const dynamoDbClient = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION,
});
const ssm = new AWS.SSM({
  region: process.env.REGION,
});

exports.handler = async (event) => {
  // get user id from token.
  const userId = event.request.userAttributes.sub;

  let data = await ssm
    .getParameter({Name: `users-ddb-${process.env.ENV}`})
    .promise();

  //Building this table name is the key
  const TableName = data.Parameter.Value;

  // check if user exists in dynamo,
  // if not, add it
  const checkIfUserExist = await dynamoDbClient
    .get({
      TableName,
      Key: {
        id: userId,
      },
    })
    .promise();

  if (Object.keys(checkIfUserExist).length === 0) {
    const object = {
      TableName,
      Item: {
        id: userId,
        __typename: 'User',
        createdAt: new Date().toISOString(),
        lastAccessedAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    };
    await dynamoDbClient.put(object).promise();
  }
  return event;
};
