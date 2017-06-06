import ApolloClient, { createNetworkInterface } from 'apollo-client';

import apolloConfig from './app.apollo.client.config';

const networkInterface = createNetworkInterface(apolloConfig);

networkInterface.use([
  {
    applyMiddleware(req, next) {
      req.options.headers = (!req.options.headers) ? {} : req.options.headers;

      // Authentication: get the authentication token from local storage if it exists
      req.options.headers.authorization = localStorage.getItem('SCAPHOLD_AUTH_TOKEN') || null;

      next();
    }
  }
]);

const client = new ApolloClient({ networkInterface });

function provideApolloClient(): ApolloClient {
  return client;
}

export default provideApolloClient;
