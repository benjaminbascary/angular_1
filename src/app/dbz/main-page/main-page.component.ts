import { Component, OnInit } from '@angular/core';

// Created by user
import { Character } from '../interfaces/Character';

//Services
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) {}

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
