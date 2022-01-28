import {
  ApolloClient, ApolloProvider, InMemoryCache
} from "@apollo/client";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const client = new ApolloClient({
  uri: 'http://hasura:8080/v1/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);