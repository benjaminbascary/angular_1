import { Component, Input } from '@angular/core';

// Interfaces
import { Character } from '../interfaces/Character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: []
})
export class CharactersComponent {

  @Input()
  characters: Character[] = []
  
}
