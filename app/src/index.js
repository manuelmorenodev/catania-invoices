import { runHookApp } from '@forrestjs/hooks'
import reactMUI from '@forrestjs/react-mui'
import reactRoot from '@forrestjs/react-root'
import reactRouter from '@forrestjs/react-router'
import { appFeature } from './app'
import { customersFeature } from './features/customers'
import { invoicesFeature } from './features/invoices'
import { productsFeature } from './features/products'
import { loginFeature } from './features/login'
import { apolloService } from './services/apollo'
import { dateNfsService } from './services/date-nfs'

runHookApp({
  settings: {
    apollo: {
      client: {
        config: {
          uri:
            process.env.REACT_APP_HASURA_ENDPOINT ||
            'http://localhost:9876/v1/graphql',
        },
      },
    },
  },
  services: [reactRoot, reactRouter, reactMUI, apolloService, dateNfsService],
  features: [
    appFeature,
    invoicesFeature,
    customersFeature,
    productsFeature,
    loginFeature,
  ],
})
