/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChaletImage = /* GraphQL */ `
  query GetChaletImage($id: ID!) {
    getChaletImage(id: $id) {
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
export const listChaletImages = /* GraphQL */ `
  query ListChaletImages(
    $filter: ModelChaletImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChaletImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        url
        tempChaletId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChaletImages = /* GraphQL */ `
  query SyncChaletImages(
    $filter: ModelChaletImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChaletImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        url
        tempChaletId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getChalet = /* GraphQL */ `
  query GetChalet($id: ID!) {
    getChalet(id: $id) {
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
export const listChalets = /* GraphQL */ `
  query ListChalets(
    $filter: ModelChaletFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChalets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        translation
        calendar
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChalets = /* GraphQL */ `
  query SyncChalets(
    $filter: ModelChaletFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChalets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        translation
        calendar
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
