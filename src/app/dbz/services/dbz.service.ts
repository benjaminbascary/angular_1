import { Injectable } from "@angular/core";

// Types and interfaces
import { Character } from "../interfaces/Character";

@Injectable()
export class DbzService {
    constructor() {
        // Here we can initialize other services
        console.log('servicio inicializado!');
    }

    private _characters: Character[] = [
        {
            name: 'Goku',
            power: 15000
        },
        {
            name: 'Vegetta',
            power: 7500
        }
    ]

    setCharacters(newCharacter: Character) {
        //this._characters.push(newCharacter);
        this._characters = [...this._characters, newCharacter];
    }

    getCharacters(): Character[] {
        // We pass the array as a brand new array to avoid passing the reference. 
        // Instead we pass an entire new array
        return [...this._characters];
    }
}
