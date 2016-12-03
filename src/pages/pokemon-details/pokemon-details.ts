import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Pokemon } from '../../models/pokemon';

import { PokemonService } from '../../providers/providers'

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
  id: string;
  pokemon: Pokemon;

  constructor(public navCtrl: NavController,
    private navParams: NavParams,
    private pokemonService: PokemonService,
    private loadingController: LoadingController) {
    this.id = navParams.get('id');
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Loading details...'
    })
    loader.present().then(() => {
      this.pokemonService.loadDetails(this.id).subscribe(pokemon => {
        this.pokemon = pokemon;
        loader.dismiss();
      })
    });
    console.log('Hello PokemonDetailsPage Page');
  }
  
}
