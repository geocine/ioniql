import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface('https://api.graph.cool/simple/v1/civxvca7l0ggn01982h17k54x');

const client = new ApolloClient({
  networkInterface,
});

export {
  client
}