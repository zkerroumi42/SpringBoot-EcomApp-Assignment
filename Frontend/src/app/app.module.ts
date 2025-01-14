import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';  // Importer FormsModule ici
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppartementsModule } from './appartements/appartements.module';
import { ProprietaireComponent } from './proprietaire/proprietaire.component';
import { HttpClientModule } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  // Importer HttpClientModule

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ProprietaireComponent,
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    AppartementsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,  // Ajouter FormsModule ici pour utiliser ngModel
    HttpClientModule,  // Ajouter HttpClientModule pour les requêtes HTTP
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
