/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelUserConditionInput = {
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type CreateThingInput = {
  id?: string | null,
  thingUserId: string,
  type?: Type | null,
  title: string,
  image?: string | null,
  description: string,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export enum Type {
  card = "card",
}


export type ModelThingConditionInput = {
  type?: ModelTypeInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelThingConditionInput | null > | null,
  or?: Array< ModelThingConditionInput | null > | null,
  not?: ModelThingConditionInput | null,
};

export type ModelTypeInput = {
  eq?: Type | null,
  ne?: Type | null,
};

export type UpdateThingInput = {
  id: string,
  thingUserId?: string | null,
  type?: Type | null,
  title?: string | null,
  image?: string | null,
  description?: string | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteThingInput = {
  id?: string | null,
};

export type ModelThingFilterInput = {
  id?: ModelIDInput | null,
  thingUserId?: ModelIDInput | null,
  type?: ModelTypeInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelThingFilterInput | null > | null,
  or?: Array< ModelThingFilterInput | null > | null,
  not?: ModelThingFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    things:  {
      __typename: "ModelThingConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateThingMutationVariables = {
  input: CreateThingInput,
  condition?: ModelThingConditionInput | null,
};

export type CreateThingMutation = {
  createThing:  {
    __typename: "Thing",
    id: string,
    thingUserId: string,
    type: Type | null,
    title: string,
    image: string | null,
    description: string,
    createdAt: string | null,
    updatedAt: string | null,
    user:  {
      __typename: "User",
      id: string,
      createdAt: string | null,
      updatedAt: string | null,
    },
  } | null,
};

export type UpdateThingMutationVariables = {
  input: UpdateThingInput,
  condition?: ModelThingConditionInput | null,
};

export type UpdateThingMutation = {
  updateThing:  {
    __typename: "Thing",
    id: string,
    thingUserId: string,
    type: Type | null,
    title: string,
    image: string | null,
    description: string,
    createdAt: string | null,
    updatedAt: string | null,
    user:  {
      __typename: "User",
      id: string,
      createdAt: string | null,
      updatedAt: string | null,
    },
  } | null,
};

export type DeleteThingMutationVariables = {
  input: DeleteThingInput,
  condition?: ModelThingConditionInput | null,
};

export type DeleteThingMutation = {
  deleteThing:  {
    __typename: "Thing",
    id: string,
    thingUserId: string,
    type: Type | null,
    title: string,
    image: string | null,
    description: string,
    createdAt: string | null,
    updatedAt: string | null,
    user:  {
      __typename: "User",
      id: string,
      createdAt: string | null,
      updatedAt: string | null,
    },
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    createdAt: string | null,
    updatedAt: string | null,
    things:  {
      __typename: "ModelThingConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetThingQueryVariables = {
  id: string,
};

export type GetThingQuery = {
  getThing:  {
    __typename: "Thing",
    id: string,
    thingUserId: string,
    type: Type | null,
    title: string,
    image: string | null,
    description: string,
    createdAt: string | null,
    updatedAt: string | null,
    user:  {
      __typename: "User",
      id: string,
      createdAt: string | null,
      updatedAt: string | null,
    },
  } | null,
};

export type ListThingsQueryVariables = {
  filter?: ModelThingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListThingsQuery = {
  listThings:  {
    __typename: "ModelThingConnection",
    items:  Array< {
      __typename: "Thing",
      id: string,
      thingUserId: string,
      type: Type | null,
      title: string,
      image: string | null,
      description: string,
      createdAt: string | null,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ThingsByDateQueryVariables = {
  type?: Type | null,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelThingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ThingsByDateQuery = {
  thingsByDate:  {
    __typename: "ModelThingConnection",
    items:  Array< {
      __typename: "Thing",
      id: string,
      thingUserId: string,
      type: Type | null,
      title: string,
      image: string | null,
      description: string,
      createdAt: string | null,
      updatedAt: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};
