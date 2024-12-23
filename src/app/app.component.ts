import { Component } from '@angular/core';
import { PokemonComponent } from "./pokemon/pokemon.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-material';
}
