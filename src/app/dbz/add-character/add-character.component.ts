import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/Character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Input()
    newCharacter: Character = {
      name: '',
      power: 0
    }

  @Output() 
    addNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  addCharacter() {
    if (this.newCharacter.name.trim().length === 0 || this.newCharacter.power === 0) {
      return
    };
    
    this.addNewCharacter.emit(this.newCharacter);

    //Then we purge new character
    this.newCharacter = {
      name: '',
      power: 0
    }
    
  }
  
}



