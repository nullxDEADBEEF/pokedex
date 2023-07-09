import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "pokemon-search",
  templateUrl: "./pokemon-search.component.html",
  styleUrls: ["./pokemon-search.component.css"],
})
export class PokemonSearchComponent {
  pokemonData: any;

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get("http://localhost:8000/api/pokemon/");
  }

  ngOnInit(): void {
    this.getData().subscribe((res) => {
      this.pokemonData = res;
    });
  }
}
