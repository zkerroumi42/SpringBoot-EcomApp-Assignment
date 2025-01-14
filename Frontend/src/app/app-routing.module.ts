import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProprietaireComponent } from './proprietaire/proprietaire.component'; // Import du composant

const routes: Routes = [
  

  {
    path: 'appartements',
    loadChildren: () =>
      import('./appartements/appartements.module').then(
        (m) => m.AppartementsModule
      ),
  },

  {
    path: 'proprietaire', // Route pour le composant Proprietaire
    component: ProprietaireComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
