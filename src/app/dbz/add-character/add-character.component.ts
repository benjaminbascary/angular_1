import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/Character';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  
  constructor(private dbzService : DbzService) {}

  @Input()
    newCharacter: Character = {
      name: '',
      power: 0
    }


  addCharacter() {
    if (this.newCharacter.name.trim().length === 0 || this.newCharacter.power === 0) {
      return
    };
    
    this.dbzService.setCharacters(this.newCharacter);

    //Then we purge new character
    this.newCharacter = {
      name: '',
      power: 0
    }
    
  }
  
}



