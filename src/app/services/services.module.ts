import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { HttpModule } from '@angular/http';

import { AuthService, GithubUsersService, PokemonService } from './index';
import { Apollo } from 'apollo-angular';

@NgModule({
  imports: [HttpModule, IonicModule.forRoot()],
  providers: [Apollo, AuthService, GithubUsersService, PokemonService]
})
export class PokemonServiceModule {}
