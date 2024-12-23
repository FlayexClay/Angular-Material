import { Component } from '@angular/core';
import { POKEMONS } from '../models/constants';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { IPokemon } from '../models/pokemon.interface';
import { PokeComponent } from '../poke/poke.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [MatButtonModule, MatListModule, CommonModule , PokeComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent {
  pokemons = [...POKEMONS];
  pokemonSelected?: IPokemon;

  clickItem(pokemon: IPokemon): void {
    this.pokemonSelected = pokemon;
  }

  deletePokemon(pokemon: IPokemon): void{
    const index = this.pokemons.indexOf(this.pokemonSelected!);

    if(index >= 0){
      this.pokemons.splice(index, 1)
      this.pokemonSelected = undefined;
    }
    alert(`Eliminaste a ${pokemon.nombre}` )
  }

  clickRestore():void{
    this.pokemons = POKEMONS
  }
}
