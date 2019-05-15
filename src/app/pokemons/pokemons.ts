import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { Pokemon } from '../types';
import { PokemonService } from '../services';

@Component({
  selector: 'page-pokemons',
  templateUrl: 'pokemons.html',
  styleUrls: ['pokemons.scss']
})
export class PokemonsPage implements OnInit {
  pokemons: Pokemon[];

  constructor(
    public navCtrl: NavController,
    private pokemonService: PokemonService
  ) {
    this.pokemonService.load().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  ngOnInit() {
    console.log('Hello PokemonsPage Page');
  }
}
