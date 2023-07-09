import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon: any;
  pokemonId: string | null = "";
  
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) {}

  getPokemon(id: string) {
    return this.http.get(`http://localhost:8000/api/pokemon/${id}`);
  }

  ngOnInit() {
    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('id');

    if (this.pokemonId) {
      this.getPokemon(this.pokemonId).subscribe(res => {
        this.pokemon = res;
      })
    }
  }
}
