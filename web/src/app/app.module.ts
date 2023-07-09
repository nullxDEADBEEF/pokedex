import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';


const routes: Routes = [
  { path: 'pokemon/:id', component: PokemonDetailComponent },
];

@NgModule({
  declarations: [AppComponent, PokemonSearchComponent, PokemonDetailComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
