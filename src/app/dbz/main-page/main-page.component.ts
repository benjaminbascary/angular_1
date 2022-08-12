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

  addNewCharacter(character: Character): void {
    console.log(character);
    this.characters.push(character);
  }

}
