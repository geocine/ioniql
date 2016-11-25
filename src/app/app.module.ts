import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { ApolloModule } from 'angular2-apollo';

import { 
  PokemonDetailsPage, 
  PokemonsPage, 
  LoginPage } from '../pages/pages';

import { GithubUsersService } from '../providers/github-users';
import { PokemonService } from '../providers/pokemons';

import { client } from './client';

@NgModule({
  declarations: [
    MyApp,
    PokemonDetailsPage,
    PokemonsPage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ApolloModule.withClient(client)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PokemonDetailsPage,
    PokemonsPage,
    LoginPage
  ],
  providers: [
    GithubUsersService, 
    PokemonService
  ]
})
export class AppModule { }
