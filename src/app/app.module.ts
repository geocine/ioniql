import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { ApolloModule } from 'angular2-apollo';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganizationsPage } from '../pages/organizations/organizations';
import { UserDetailsPage } from '../pages/user-details/user-details';
import { PokemonsPage } from '../pages/pokemons/pokemons';

import { GithubUsers } from '../providers/github-users';
import { Pokemons } from '../providers/pokemons';

import { client } from './client';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage,
    PokemonsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ApolloModule.withClient(client)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganizationsPage,
    UserDetailsPage,
    PokemonsPage
  ],
  providers: [GithubUsers, Pokemons]
})
export class AppModule { }
