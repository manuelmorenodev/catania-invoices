import { runHookApp } from "@forrestjs/hooks";
import reactRoot from "@forrestjs/react-root";
import reactMUI from '@forrestjs/react-mui';
import reactRouter from "@forrestjs/react-router";

import { appFeature } from "./app";
import { invoicesFeature } from "./invoices";
import apollo from "./apollo";

runHookApp({
  settings: {
    apollo: {
      client: {
        config: {
          uri: process.env.REACT_APP_HASURA_ENDPOINT
        }
      }
    }
  },
  services: [reactRoot, reactRouter, reactMUI, apollo],
  features: [appFeature, invoicesFeature]
});
