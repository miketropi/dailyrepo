import { request, gql } from 'graphql-request'

export async function _Request(document, params = {}) {
  return await request( import.meta.env.VITE_API_ENDPOIN, document, params)
}

export async function GET_TOPICS() {
  const _QUERY = gql`query topics($first: Int, $skip: Int, $stage: Stage!, $where: TopicWhereInput, $orderBy: TopicOrderByInput) {
    page: topicsConnection(
      first: $first
      skip: $skip
      stage: $stage
      where: $where
      orderBy: $orderBy
    ) {
      edges {
        node {
          id
          featureImage {
            url
            handle
          }
          id
          name
          posts(first: 500) {
            entryId: id
            documentInStages(includeCurrent: true) {
              id
              stage
              updatedAt
              publishedAt
            }
          }
          slug
          description {
            html
          }
          createDate
        }
      }
      aggregate {
        count
      }
    }
  }`

  return await _Request(_QUERY, {"first":25,"skip":0,"stage":"DRAFT","where":{"AND":[]},"orderBy":null,"locales":null})
}

export async function GET_POSTS() {
  const _QUERY = gql`query posts($first: Int, $skip: Int, $stage: Stage!, $where: PostWhereInput, $orderBy: PostOrderByInput) {
    page: postsConnection(
      first: $first
      skip: $skip
      stage: $stage
      where: $where
      orderBy: $orderBy
    ) {
      edges {
        node {
          id
          createDate
          featureImage {
            url
          }
          id
          name
          slug
          topics(first: 500) {
            entryId: id
            name
            slug
          }
          content {
            html
          }
        }
      }
      aggregate {
        count
      }
    }
  }`;

  return await _Request(_QUERY, {"first":25,"skip":0,"stage":"DRAFT","where":{"AND":[]},"orderBy":null,"locales":null})
}