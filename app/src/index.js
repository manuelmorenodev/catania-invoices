import { runHookApp } from "@forrestjs/hooks";
import reactRoot from "@forrestjs/react-root";
import reactMUI from '@forrestjs/react-mui';
import reactRouter from "@forrestjs/react-router";

import { appFeature } from "./features/app";
import { invoicesFeature } from "./features/invoices";

runHookApp({
  services: [reactRoot, reactRouter, reactMUI],
  features: [appFeature, invoicesFeature]
});
