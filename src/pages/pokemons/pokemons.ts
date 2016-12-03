import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Pokemon } from '../../models/pokemon';
import { PokemonService } from '../../providers/providers';
import { PokemonDetailsPage } from '../pokemon-details/pokemon-details';

/*
  Generated class for the Pokemons page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pokemons',
  templateUrl: 'pokemons.html'
})
export class PokemonsPage {
  pokemons: Pokemon[]

  constructor(public navCtrl: NavController, private pokemonService: PokemonService) {
    pokemonService.load().subscribe(pokemons => {
      this.pokemons = pokemons;
    });
  }

  goToDetails(id: string) {
    this.navCtrl.push(PokemonDetailsPage, { id });
  }

  ionViewDidLoad() {
    console.log('Hello PokemonsPage Page');
  }

}
