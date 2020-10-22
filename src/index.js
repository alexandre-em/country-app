import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client'


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'https://countries-274616.ew.r.appspot.com/'
    }),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
