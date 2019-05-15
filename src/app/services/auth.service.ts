import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
// import { Observable } from 'rxjs/Rx';
import gql from 'graphql-tag';

const Login = gql`
  mutation ($email: String!, $password: String!){
    signinUser(email: { email: $email, password: $password }){
      token
    }
  }
`;

@Injectable()
export class AuthService {
  isAuthenticatedBool: boolean;

  constructor(public apollo: Apollo) {
    console.log('Hello Auth Provider');
  }

  login(email: string, password: string): Promise<any> {
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
    }
  }

  public isAuthenticated(): any {
    return !!localStorage.getItem('auth_token');
  }


}
