import { Injectable } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
//import { Observable } from 'rxjs/Rx';
import gql from 'graphql-tag';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { PokemonsPage } from '../pages/pages';

const Login = gql`
  mutation ($email: String!, $password: String!){
    signinUser(email: { email: $email, password: $password }){
      token
    }
  }
`;

@Injectable()
export class AuthService {
  isAuthenticatedBool: Boolean

  constructor(public apollo: Angular2Apollo) {
    console.log('Hello Auth Provider');
  }

  login(email: string, password: string): Promise<any>{
    return this.apollo.mutate({
      mutation: Login,
      variables: {
        email,
        password
      }
    }).toPromise();
  }

  logout() {
    if (localStorage.getItem('auth_token')) {
      localStorage.removeItem('auth_token');
      // navigate somewhere
    }
  }

  public isAuthenticated(): any {
    return !!localStorage.getItem('auth_token');
  }


}
