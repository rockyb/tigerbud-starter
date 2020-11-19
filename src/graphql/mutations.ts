// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    things {
      nextToken
    }
  }
}
`;
export const createThing = `mutation CreateThing(
  $input: CreateThingInput!
  $condition: ModelThingConditionInput
) {
  createThing(input: $input, condition: $condition) {
    id
    thingUserId
    type
    title
    image
    description
    createdAt
    updatedAt
    user {
      id
      createdAt
      updatedAt
    }
  }
}
`;
export const updateThing = `mutation UpdateThing(
  $input: UpdateThingInput!
  $condition: ModelThingConditionInput
) {
  updateThing(input: $input, condition: $condition) {
    id
    thingUserId
    type
    title
    image
    description
    createdAt
    updatedAt
    user {
      id
      createdAt
      updatedAt
    }
  }
}
`;
export const deleteThing = `mutation DeleteThing(
  $input: DeleteThingInput!
  $condition: ModelThingConditionInput
) {
  deleteThing(input: $input, condition: $condition) {
    id
    thingUserId
    type
    title
    image
    description
    createdAt
    updatedAt
    user {
      id
      createdAt
      updatedAt
    }
  }
}
`;
