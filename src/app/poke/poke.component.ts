import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IPokemon } from '../models/pokemon.interface';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-poke',
  standalone: true,
  imports: [MatCardModule, MatButton],
  templateUrl: './poke.component.html',
  styleUrl: './poke.component.scss',
})
export class PokeComponent implements OnInit{
  @Input({ required: true }) pokemon?: IPokemon;
  @Output()deletePokemon = new EventEmitter<IPokemon>();

  ngOnInit(): void {
    console.log(this.pokemon);
    
  }
}
