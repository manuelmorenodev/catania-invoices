const gql = require('graphql-tag')

const GET_USERS = gql`
  query getUsers {
    users {
      id
      name
    }
  }
`

const usersListRoute = async (request, reply) => {
  const res = await request.apollo.query({
    query: GET_USERS,
    fetchPolicy: 'no-cache',
  })

  const users = res.data.users.map(({ id, name }) => ({
    id,
    name,
  }))

  reply.send(users)
}

module.exports = usersListRoute
