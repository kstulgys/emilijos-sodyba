/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateChaletImageInput = {
  id?: string | null,
  url: string,
  tempChaletId: string,
  _version?: number | null,
};

export type ModelChaletImageConditionInput = {
  url?: ModelStringInput | null,
  tempChaletId?: ModelIDInput | null,
  and?: Array< ModelChaletImageConditionInput | null > | null,
  or?: Array< ModelChaletImageConditionInput | null > | null,
  not?: ModelChaletImageConditionInput | null,
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

export type ChaletImage = {
  __typename: "ChaletImage",
  id: string,
  url: string,
  tempChaletId: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateChaletImageInput = {
  id: string,
  url?: string | null,
  tempChaletId?: string | null,
  _version?: number | null,
};

export type DeleteChaletImageInput = {
  id: string,
  _version?: number | null,
};

export type CreateChaletInput = {
  id?: string | null,
  translation: string,
  calendar: string,
  _version?: number | null,
};

export type ModelChaletConditionInput = {
  translation?: ModelStringInput | null,
  calendar?: ModelStringInput | null,
  and?: Array< ModelChaletConditionInput | null > | null,
  or?: Array< ModelChaletConditionInput | null > | null,
  not?: ModelChaletConditionInput | null,
};

export type Chalet = {
  __typename: "Chalet",
  id: string,
  translation: string,
  calendar: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateChaletInput = {
  id: string,
  translation?: string | null,
  calendar?: string | null,
  _version?: number | null,
};

export type DeleteChaletInput = {
  id: string,
  _version?: number | null,
};

export type ModelChaletImageFilterInput = {
  id?: ModelIDInput | null,
  url?: ModelStringInput | null,
  tempChaletId?: ModelIDInput | null,
  and?: Array< ModelChaletImageFilterInput | null > | null,
  or?: Array< ModelChaletImageFilterInput | null > | null,
  not?: ModelChaletImageFilterInput | null,
};

export type ModelChaletImageConnection = {
  __typename: "ModelChaletImageConnection",
  items?:  Array<ChaletImage | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelChaletFilterInput = {
  id?: ModelIDInput | null,
  translation?: ModelStringInput | null,
  calendar?: ModelStringInput | null,
  and?: Array< ModelChaletFilterInput | null > | null,
  or?: Array< ModelChaletFilterInput | null > | null,
  not?: ModelChaletFilterInput | null,
};

export type ModelChaletConnection = {
  __typename: "ModelChaletConnection",
  items?:  Array<Chalet | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateChaletImageMutationVariables = {
  input: CreateChaletImageInput,
  condition?: ModelChaletImageConditionInput | null,
};

export type CreateChaletImageMutation = {
  createChaletImage?:  {
    __typename: "ChaletImage",
    id: string,
    url: string,
    tempChaletId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChaletImageMutationVariables = {
  input: UpdateChaletImageInput,
  condition?: ModelChaletImageConditionInput | null,
};

export type UpdateChaletImageMutation = {
  updateChaletImage?:  {
    __typename: "ChaletImage",
    id: string,
    url: string,
    tempChaletId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChaletImageMutationVariables = {
  input: DeleteChaletImageInput,
  condition?: ModelChaletImageConditionInput | null,
};

export type DeleteChaletImageMutation = {
  deleteChaletImage?:  {
    __typename: "ChaletImage",
    id: string,
    url: string,
    tempChaletId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChaletMutationVariables = {
  input: CreateChaletInput,
  condition?: ModelChaletConditionInput | null,
};

export type CreateChaletMutation = {
  createChalet?:  {
    __typename: "Chalet",
    id: string,
    translation: string,
    calendar: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChaletMutationVariables = {
  input: UpdateChaletInput,
  condition?: ModelChaletConditionInput | null,
};

export type UpdateChaletMutation = {
  updateChalet?:  {
    __typename: "Chalet",
    id: string,
    translation: string,
    calendar: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChaletMutationVariables = {
  input: DeleteChaletInput,
  condition?: ModelChaletConditionInput | null,
};

export type DeleteChaletMutation = {
  deleteChalet?:  {
    __typename: "Chalet",
    id: string,
    translation: string,
    calendar: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetChaletImageQueryVariables = {
  id: string,
};

export type GetChaletImageQuery = {
  getChaletImage?:  {
    __typename: "ChaletImage",
    id: string,
    url: string,
    tempChaletId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChaletImagesQueryVariables = {
  filter?: ModelChaletImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChaletImagesQuery = {
  listChaletImages?:  {
    __typename: "ModelChaletImageConnection",
    items?:  Array< {
      __typename: "ChaletImage",
      id: string,
      url: string,
      tempChaletId: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChaletImagesQueryVariables = {
  filter?: ModelChaletImageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChaletImagesQuery = {
  syncChaletImages?:  {
    __typename: "ModelChaletImageConnection",
    items?:  Array< {
      __typename: "ChaletImage",
      id: string,
      url: string,
      tempChaletId: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetChaletQueryVariables = {
  id: string,
};

export type GetChaletQuery = {
  getChalet?:  {
    __typename: "Chalet",
    id: string,
    translation: string,
    calendar: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChaletsQueryVariables = {
  filter?: ModelChaletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChaletsQuery = {
  listChalets?:  {
    __typename: "ModelChaletConnection",
    items?:  Array< {
      __typename: "Chalet",
      id: string,
      translation: string,
      calendar: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncChaletsQueryVariables = {
  filter?: ModelChaletFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncChaletsQuery = {
  syncChalets?:  {
    __typename: "ModelChaletConnection",
    items?:  Array< {
      __typename: "Chalet",
      id: string,
      translation: string,
      calendar: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateChaletImageSubscription = {
  onCreateChaletImage?:  {
    __typename: "ChaletImage",
    id: string,
    url: string,
    tempChaletId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChaletImageSubscription = {
  onUpdateChaletImage?:  {
    __typename: "ChaletImage",
    id: string,
    url: string,
    tempChaletId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChaletImageSubscription = {
  onDeleteChaletImage?:  {
    __typename: "ChaletImage",
    id: string,
    url: string,
    tempChaletId: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChaletSubscription = {
  onCreateChalet?:  {
    __typename: "Chalet",
    id: string,
    translation: string,
    calendar: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChaletSubscription = {
  onUpdateChalet?:  {
    __typename: "Chalet",
    id: string,
    translation: string,
    calendar: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChaletSubscription = {
  onDeleteChalet?:  {
    __typename: "Chalet",
    id: string,
    translation: string,
    calendar: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
