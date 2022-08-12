import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Input()
  addCharacter() {}

  @Input()
  newCharacter: any
}



