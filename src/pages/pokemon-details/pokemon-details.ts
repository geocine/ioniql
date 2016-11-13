import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pokemon } from '../../models/pokemon';

import { PokemonService } from '../../providers/pokemons'

/*
  Generated class for the PokemonDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pokemon-details',
  templateUrl: 'pokemon-details.html'
})
export class PokemonDetailsPage {
  name: string;
  pokemon: Pokemon;

  constructor(public navCtrl: NavController, private navParams: NavParams, private pokemonService: PokemonService) {
    this.name = navParams.get('name');
    pokemonService.loadDetails(this.name).subscribe(pokemon => {
      this.pokemon = pokemon;
      console.log(pokemon);
    })
  }

  ionViewDidLoad() {
    console.log('Hello PokemonDetailsPage Page');
  }

}
