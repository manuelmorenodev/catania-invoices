const { runHookApp } = require('@forrestjs/hooks')
const envalid = require('envalid')
const fastify = require('@forrestjs/service-fastify')
const apollo = require('@forrestjs/service-apollo')
const fastifyHealthz = require('@forrestjs/service-fastify-healthz')

const homeFeature = require('./features/home')
const usersFeature = require('./features/users')

const validatedEnv = envalid.cleanEnv(process.env, {
  HASURA_ENDPOINT: envalid.str({
    default: 'http://hasura:8080/v1/graphql',
  }),
  FASTIFY_PORT: envalid.num({
    default: 80,
  }),
})

runHookApp({
  trace: 'compact',
  settings: {
    fastify: {
      port: validatedEnv.FASTIFY_PORT,
    },
    apollo: {
      client: {
        config: {
          uri: validatedEnv.HASURA_ENDPOINT,
        },
      },
    },
  },
  services: [apollo, fastify, fastifyHealthz],
  features: [homeFeature, usersFeature],
}).catch(console.error)
