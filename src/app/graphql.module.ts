import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';

const uri = 'https://api.graph.cool/simple/v1/civxvca7l0ggn01982h17k54x';
export function createApollo(httpLink: HttpLink) {

  const http = httpLink.create({ uri });

  const auth = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('auth_token');
    if (!token) {
      return {};
    } else {
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`
        }
      };
    }
  });

  return {
    link: auth.concat(http),
    cache: new InMemoryCache()
  };
}

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
