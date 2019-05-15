import { Injectable } from '@angular/core';

import { Pokemon } from '../types/pokemon';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';

export interface GetPokemons {
  allPokemons: Pokemon[];
}

// We use the gql tag to parse our query string into a query document
const PokemonList = gql`
  query GetPokemons {
    allPokemons(first: 20) {
      id
      name
      image
    }
  }
`;

export interface GetDetails {
  Pokemon: Pokemon;
}

const PokemonDetails = gql`
  query GetDetails($id: ID) {
    Pokemon(id: $id) {
      name
      image
    }
  }
`;

@Injectable()
export class PokemonService {
  constructor(public apollo: Apollo) {
    console.log('Hello Pokemons Provider');
  }

  load(): Observable<Pokemon[]> {
    const query = this.apollo.watchQuery<GetPokemons>({ query: PokemonList });
    return query.valueChanges.pipe(
      map(res => res.data.allPokemons as Pokemon[])
    );
  }

  loadDetails(id: string): Observable<Pokemon> {
    const query = this.apollo.watchQuery<GetDetails>({
      query: PokemonDetails,
      variables: {
        id
      }
    });
    return query.valueChanges.pipe(map(res => res.data.Pokemon as Pokemon));
  }
}
