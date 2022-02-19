const gql = require('graphql-tag')

const GET_USER = gql`
  query GetUser($username: String!) {
    users(where: { username: { _eq: $username } }) {
      username
    }
  }
`

const GET_IDENTITY_TOKEN = gql`
  query GetIdentityToken($username: String!) {
    identity_tokens(
      where: {
        username: { _eq: $username }
        is_valid: { _eq: true }
        expires_at: { _gt: "now()" }
      }
    ) {
      id
    }
  }
`
const CREATE_IDENTITY_TOKEN = gql`
  mutation CreateIdentityToken($username: String!) {
    token: insert_identity_tokens_one(object: { username: $username }) {
      id
    }
  }
`

const getIdentityToken = async (request, username) => {
  const queryTokenResponse = await request.apollo.query({
    query: GET_IDENTITY_TOKEN,
    variables: { username },
    fetchPolicy: 'no-cache',
  })

  if (queryTokenResponse.data.identity_tokens.length > 0) {
    return queryTokenResponse.data.identity_tokens[0].id
  }

  const createTokenResponse = await request.apollo.mutate({
    mutation: CREATE_IDENTITY_TOKEN,
    variables: { username },
    fetchPolicy: 'no-cache',
  })

  if (createTokenResponse.data.token) {
    return createTokenResponse.data.token.id
  }
}

const loginUserRoute = async (request, reply) => {
  const { username } = request.params

  const res = await request.apollo.query({
    query: GET_USER,
    variables: {
      username,
    },
    fetchPolicy: 'no-cache',
  })

  const user = res.data.users.shift()
  if (!user) {
    reply.code(404).send('User not found')
  }

  const identityToken = await getIdentityToken(request, username)

  reply
    .type('text/html')
    .setCookie('x-identity-token', identityToken, {
      path: '/',
      httpOnly: true,
    })
    .send(`<script>window.location = "/tenants";</script>`)
}

module.exports = loginUserRoute
