import { Injectable } from '@angular/core';

import { Pokemon } from '../models/pokemon';
import { Angular2Apollo } from 'angular2-apollo';
import { Observable } from 'rxjs/Rx';
import gql from 'graphql-tag';

import 'rxjs/add/operator/map';

// We use the gql tag to parse our query string into a query document
const PokemonList = gql`
  query GetPokemons{
    allPokemons(first: 20) {
      id
      name
      image
    }
  }
`;

const PokemonDetails = gql`
  query getDetails($id: ID){
    Pokemon(id: $id){
      name
      image
    }
  }
`;

@Injectable()
export class PokemonService {

  constructor(public apollo: Angular2Apollo) {
    console.log('Hello Pokemons Provider');
  }

  load(): Observable<Pokemon[]> {
    return this.apollo.watchQuery({ query: PokemonList })
      .map(res => <Pokemon[]>(res.data.allPokemons));
  }

  loadDetails(id: string): Observable<Pokemon> {
    return this.apollo.watchQuery({ 
        query: PokemonDetails , 
        variables : {
          id: id
        }
      })
      .map(res => <Pokemon>(res.data.Pokemon));
  }

}
