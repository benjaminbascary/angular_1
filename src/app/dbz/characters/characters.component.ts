import { Component } from '@angular/core';

// Interfaces
import { Character } from '../interfaces/Character';

// Services
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: []
})
export class CharactersComponent {

  constructor(private dbzService: DbzService) { }

  get characters(): Character[] {
    return this.dbzService.getCharacters()
  };
}
