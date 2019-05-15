import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  {
    path: 'pokemons',
    loadChildren: './pokemons/pokemons.module#PokemonsPageModule',
    canActivate: [AuthGuardService]
  },
  {
    path: 'pokemons/:id',
    loadChildren:
      './pokemon-details/pokemon-details.module#PokemonDetailsPageModule',
      canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
