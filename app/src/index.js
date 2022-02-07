import { runHookApp } from "@forrestjs/hooks";
import reactRoot from "@forrestjs/react-root";
import reactMUI from '@forrestjs/react-mui';
import reactRouter from "@forrestjs/react-router";

import { appFeature } from "./app";
import { invoicesFeature } from "./invoices";
import { apolloService } from "./apollo";
import { customersFeature } from "./customers";

runHookApp({
  settings: {
    apollo: {
      client: {
        config: {
          uri: process.env.REACT_APP_HASURA_ENDPOINT || 'http://localhost:9876/v1/graphql'
        }
      }
    }
  },
  services: [reactRoot, reactRouter, reactMUI, apolloService],
  features: [appFeature, invoicesFeature, customersFeature]
});
