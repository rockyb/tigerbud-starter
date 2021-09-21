/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getThingCount = /* GraphQL */ `
  query GetThingCount {
    getThingCount
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      createdAt
      updatedAt
      things {
        nextToken
      }
    }
  }
`;
export const getThing = /* GraphQL */ `
  query GetThing($id: ID!) {
    getThing(id: $id) {
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
export const listThings = /* GraphQL */ `
  query ListThings(
    $filter: ModelThingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        thingUserId
        type
        title
        image
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const thingsByDate = /* GraphQL */ `
  query ThingsByDate(
    $type: Type
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelThingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    thingsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        thingUserId
        type
        title
        image
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
