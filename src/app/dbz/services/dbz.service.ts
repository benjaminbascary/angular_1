import { Injectable } from "@angular/core";

// Types and interfaces
import { Character } from "../interfaces/Character";


@Injectable()
export class DbzService {
    constructor() {
        console.log('servicio inicializado!');
    }

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

    setCharacters(newCharacter: Character) {
        this.characters.push(newCharacter);
    }

    getCharacters(): Character[] {
        return this.characters;
    }
}
