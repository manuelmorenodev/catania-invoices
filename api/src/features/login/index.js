const loginUserRoute = require('./login.route')
const loginTenantsRoute = require('./tenants.route')

const loginFeature = {
  name: 'login',
  hook: '$FASTIFY_ROUTE',
  handler: [
    {
      method: 'GET',
      url: '/login/:username',
      handler: loginUserRoute,
    },
    {
      method: 'GET',
      url: '/tenants',
      handler: loginTenantsRoute,
    },
  ],
}

module.exports = loginFeature
