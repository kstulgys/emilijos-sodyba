/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createChaletImage = /* GraphQL */ `
  mutation CreateChaletImage(
    $input: CreateChaletImageInput!
    $condition: ModelChaletImageConditionInput
  ) {
    createChaletImage(input: $input, condition: $condition) {
      id
      url
      tempChaletId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateChaletImage = /* GraphQL */ `
  mutation UpdateChaletImage(
    $input: UpdateChaletImageInput!
    $condition: ModelChaletImageConditionInput
  ) {
    updateChaletImage(input: $input, condition: $condition) {
      id
      url
      tempChaletId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteChaletImage = /* GraphQL */ `
  mutation DeleteChaletImage(
    $input: DeleteChaletImageInput!
    $condition: ModelChaletImageConditionInput
  ) {
    deleteChaletImage(input: $input, condition: $condition) {
      id
      url
      tempChaletId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createChalet = /* GraphQL */ `
  mutation CreateChalet(
    $input: CreateChaletInput!
    $condition: ModelChaletConditionInput
  ) {
    createChalet(input: $input, condition: $condition) {
      id
      translation
      calendar
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateChalet = /* GraphQL */ `
  mutation UpdateChalet(
    $input: UpdateChaletInput!
    $condition: ModelChaletConditionInput
  ) {
    updateChalet(input: $input, condition: $condition) {
      id
      translation
      calendar
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteChalet = /* GraphQL */ `
  mutation DeleteChalet(
    $input: DeleteChaletInput!
    $condition: ModelChaletConditionInput
  ) {
    deleteChalet(input: $input, condition: $condition) {
      id
      translation
      calendar
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
