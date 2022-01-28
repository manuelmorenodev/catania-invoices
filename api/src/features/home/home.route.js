const gql = require('graphql-tag')

const GET_ALL = gql`
    query getAll{
        users {
            id
            name
        }
        invoices {
        id
        user_id
        created_at
        updated_at
        lines: invoices_lines {
            id
            description
            amount
            created_at
            updated_at
        }
    }
  }
  
`

const homeRoute = async (request, reply) => {

    const res = await request.apollo.query({
        query: GET_ALL,
        fetchPolicy: 'no-cache'
    })

    const users = res.data.users.map(({ id, name }) => ({
        id,
        name
    }))
    
    

    reply.send(res)

    // reply.send({
    //     users,
    //     invoices,
    // })

}

module.exports = homeRoute