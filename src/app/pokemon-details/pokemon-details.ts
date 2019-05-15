import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Pokemon } from '../types';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../services';

@Component({
  selector: 'page-pokemon-details',
  templateUrl: 'pokemon-details.html'
})
export class PokemonDetailsPage implements OnInit {
  id: string;
  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private pokemonService: PokemonService
  ) {}

  async ngOnInit() {
    const loader = await this.loadingController.create({
      message: 'Loading details...'
    });
    loader.present().then(() => {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.pokemonService.loadDetails(id).subscribe(data => {
          this.pokemon = data;
          loader.dismiss();
        });
      }
    });
    console.log('Hello PokemonDetailsPage Page');
  }
}
