import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PokemonDetails } from "../modelos";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root",
  })
export class PokemonService {
    private url: string = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) {}

    getPokemonDetails(name: string): Observable<PokemonDetails> {
        const pokeUrl = `${this.url}/pokemon/${name}`;

        return this.http.get<PokemonDetails>(pokeUrl).pipe(
        map((data) => ({
            ...data,
            pic: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`,
        }))
        );
    }

}