const forrest = require('@forrestjs/core')
const { runHookApp } = require('@forrestjs/hooks')
const envalid = require('envalid')
const fastify = require('@forrestjs/service-fastify')
const apollo = require('@forrestjs/service-apollo')
const fastifyHealthz = require('@forrestjs/service-fastify-healthz')
const serviceCookie = require('@forrestjs/service-fastify-cookie')
const serviceJwt = require('@forrestjs/service-jwt')

const homeFeature = require('./features/home')
const usersFeature = require('./features/users')
const loginFeature = require('./features/login')

const env = envalid.cleanEnv(process.env, {
  HASURA_ENDPOINT: envalid.str({
    default: 'http://hasura:8080/v1/graphql',
  }),
  FASTIFY_PORT: envalid.num({
    default: 80,
  }),
  JWT_SECRET: envalid.str({
    default: 'uwuiwbrgiuebgiub34uif4n3uif',
  }),
  JWT_DURATION: envalid.str({
    default: '5m',
  }),
})

forrest
  .run({
    trace: 'compact',
    settings: {
      fastify: {
        port: env.FASTIFY_PORT,
      },
      jwt: {
        secret: env.JWT_SECRET,
        duration: env.JWT_DURATION,
      },
      apollo: {
        client: {
          config: {
            uri: env.HASURA_ENDPOINT,
          },
        },
      },
    },
    services: [apollo, fastify, fastifyHealthz, serviceCookie, serviceJwt],
    features: [homeFeature, usersFeature, loginFeature],
  })
  .catch(console.error)
