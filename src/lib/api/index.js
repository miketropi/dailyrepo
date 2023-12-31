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
            url(transformation: {image: {resize: {height: 600, width: 600, fit: crop}}})
            handle
          }
          id
          name
          posts {
            entryId: id
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
  }
  `

  return await _Request(_QUERY, {"first":100,"skip":0,"stage":"DRAFT","where":{"AND":[]},"orderBy":null,"locales":null})
}

export async function GET_POSTS(paged = 1) {
  const postPerPage = parseInt(import.meta.env.VITE_POST_PER_PAGE);
  const skip = (paged == 1 ? 0 : ((paged - 1) * postPerPage));
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
            url(transformation: {image: {resize: {height: 250, fit: crop, width: 250}}})
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
  }
  `;

  return await _Request(_QUERY, {"first": postPerPage,"skip": skip,"stage":"DRAFT","where":{"AND":[]},"orderBy":"createDate_DESC","locales":null})
}

export async function GET_POST($slug) {
  const _QUERY = gql`query post {
    post(where: {slug: "${ $slug }"}) {
      content {
        html
      }
      createDate
      featureImage {
        url(transformation: {image: {resize: {height: 400, width: 550, fit: crop}}})
      }
      gallery {
        ... on Gallery {
          id
          name
          images {
            url(transformation: {image: {resize: {fit: crop, width: 350, height: 350}}})
            id
            fileName
            documentInStages {
              url
            }
          }
          description
        }
      }
      name
      slug
      topics {
        id
        name
        slug
      }
      id
    }
  }
  `;

  return await _Request(_QUERY);
}

export async function GET_TOPIC($slug) {
  const _QUERY = gql`query topic {
    topic(where: {slug: "${ $slug }"}) {
      id
      name
      slug
      createDate
      description {
        html
      }
      posts(orderBy: createDate_DESC) {
        id
        name
        slug
        createDate
        featureImage {
          url(transformation: {image: {resize: {height: 200, width: 200, fit: crop}}})
        }
      }
      featureImage {
        url(transformation: {image: {resize: {height: 300, width: 300, fit: crop}}})
      }
    }
  }
  `;

  return await _Request(_QUERY);
}