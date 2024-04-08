import { Injectable} from '@angular/core';
import {v4  as uuid} from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root', // Esto asegura que el servicio esté disponible en toda la aplicación
})
export class GhibliService {
  public characters: Character[]= [{
    id: uuid(),
    name: 'Sophie',
    power: 9500
  },{
    id: uuid(),
    name: 'Nicky',
    power: 10000
  },{
    id: uuid(),
    name: 'Naoko',
    power: 10500
}]; //no se importa la interface sino en este módulo

/**   oneNewCharacter ( character: Character):void{
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }

    this.characters.push(character);
  } */

  addCharacter ( character: Character):void{
    const newCharacter: Character = {
      id: uuid(),
      name: character.name,
      power: character.power
    }

    this.characters.push(newCharacter);
  }
  // onDeleteCharacter( index:number ){
  //   this.characters.splice(index, 1);
  deleteCharacterById(id:string){
    this.characters = this.characters.filter( character => character.id !==id );
  }
 }


