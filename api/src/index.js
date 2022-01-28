const { runHookApp } = require("@forrestjs/hooks");
const envalid = require('envalid');
const fastify = require("@forrestjs/service-fastify");
const apollo = require("@forrestjs/service-apollo");
const fastifyHealthz = require("@forrestjs/service-fastify-healthz");

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
    settings: {
        fastify: {
            port: 4000
        },
        apollo: {
            client: {
                config: {
                    uri: 'http://hasura:8080/v1/graphql'
                    // uri: validatedEnv.HASURA_ENDPOINT
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
