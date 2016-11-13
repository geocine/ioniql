import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { ApolloModule } from 'angular2-apollo';

import { PokemonDetailsPage } from '../pages/pokemon-details/pokemon-details';
import { PokemonsPage } from '../pages/pokemons/pokemons';

import { GithubUsersService } from '../providers/github-users';
import { PokemonService } from '../providers/pokemons';

import { client } from './client';

@NgModule({
  declarations: [
    MyApp,
    PokemonDetailsPage,
    PokemonsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    ApolloModule.withClient(client)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PokemonDetailsPage,
    PokemonsPage
  ],
  providers: [
    GithubUsersService, 
    PokemonService
  ]
})
export class AppModule { }
