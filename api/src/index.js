const fastify = require('@forrestjs/service-fastify')
const fastifyHealthz = require('@forrestjs/service-fastify-healthz')
const apollo = require('@forrestjs/service-apollo')
const { runHookApp } = require('@forrestjs/hooks')
const envalid = require('envalid')

const homeFeature = require('./features/home')

// const validatedEnv = envalid.cleanEnv({
//     HASURA_ENDPOINT: envalid.str({
//         desc: 'hola?'
//     }),
//     FASTIFY_PORT: envalid.num({
//         default: 4000
//     })
// })

runHookApp({
    trace: "compact",
    setting: {
        fastify: {
            port: 4000
        },
        apollo: {
            client: {
                config: {
                    url: 'http://hasura:8080/v1/graphql'
                    // url: validatedEnv.HASURA_ENDPOINT
                }
            }
        }
    },
    services: [
        apollo,
        fastify,
        fastifyHealthz
    ],
    features: [
        homeFeature
    ]
}).catch(console.error)
