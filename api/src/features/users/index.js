const usersListRoute = require('./list.route')

const usersFeature = {
  name: 'users',
  hook: '$FASTIFY_ROUTE',
  handler: [
    {
      method: 'GET',
      url: '/users',
      handler: usersListRoute,
    },
  ],
}

module.exports = usersFeature
