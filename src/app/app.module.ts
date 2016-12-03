import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { ApolloModule } from 'angular2-apollo';

import { 
  PokemonDetailsPage, 
  PokemonsPage, 
  LoginPage } from '../pages/pages';

import { 
  GithubUsersService,
  PokemonService,
  AuthService } from '../providers/providers';

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
    PokemonService,
    AuthService
  ]
})
export class AppModule { }
