import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListAppartementComponent } from './list-appartement/list-appartement.component';
import { FormsModule } from '@angular/forms';  // Importer FormsModule pour utiliser ngModel
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatOption, MatSelect} from "@angular/material/select";

// Définition des routes pour ce module
const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'appartements', component: ListAppartementComponent }, // Route vers la liste des appartements
    ],
  },
];

@NgModule({
  declarations: [
    ListAppartementComponent,  // Déclaration du composant ListAppartementComponent
  ],
  imports: [
    CommonModule,
    FormsModule,  // Ajouter FormsModule pour pouvoir utiliser ngModel dans ce module
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule.forChild(routes),  // Définir les routes spécifiques pour ce module
    MatCardModule,
    MatSelect,
    MatOption,
    // Utiliser MatCardModule pour l'affichage des informations
  ],
  exports: [
    ListAppartementComponent  // Exporter ListAppartementComponent pour qu'il soit utilisé dans d'autres modules
  ]
})
export class AppartementsModule { }
