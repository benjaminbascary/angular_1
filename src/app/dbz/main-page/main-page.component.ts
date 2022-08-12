import { Component, OnInit } from '@angular/core';

import { Character } from '../interfaces/Character';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegetta',
      power: 7500
    }
  ]

  newCharacter: Character = {
    name: '',
    power: 0
  }

  addCharacter() {
    if (this.newCharacter.name.trim().length === 0 || this.newCharacter.power === 0) {
      return
    };

    this.characters.push(this.newCharacter);
    // Purge new character
    this.newCharacter = {
      name: '',
      power: 0
    }
  }

}
