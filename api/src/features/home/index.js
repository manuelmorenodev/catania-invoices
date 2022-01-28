const homeRoute = require('./home.route')

const homeFeature = ({ registerAction }) => {
    registerAction({
        hook: '$FASTIFY_GET',
        handler: () => {
            return {
                url: '/',
                handler: homeRoute
            }
        }
    })
}

module.exports = homeFeature