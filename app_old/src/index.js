import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import './index.css';
import Invoice from "./routes/invoices/Invoice";
import Invoices from "./routes/invoices/Invoices";

const client = new ApolloClient({
  uri: 'http://localhost:8080/v1/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="invoices">
              <Route index element={<Invoices />} />
              <Route path="new" element={<Invoice />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
)