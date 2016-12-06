import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/civxvca7l0ggn01982h17k54x',
  opts: {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('auth_token')}`
    }
  }
});

const client = new ApolloClient({
  networkInterface,
});

export {
  client
}