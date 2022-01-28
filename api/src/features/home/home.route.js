const gql = require('graphql-tag')

const GET_USERS = gql`
    query getUsers {
        users {
            id
            name
        }
    }
`

const homeRoute = async (request, reply) => {

    const usersRes = await request.apollo.query({
        query: GET_USERS,
        fetchPolicy: 'no-cache'
    })

    reply.send(usersRes.data.users)

}

module.exports = homeRoute