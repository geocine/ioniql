import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface('https://graphql-pokemon.now.sh/');

const client = new ApolloClient({
  networkInterface,
});

export {
  client
}