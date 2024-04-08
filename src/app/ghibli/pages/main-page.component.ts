import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { GhibliService } from '../services/ghibli.service';

@Component({
  selector: 'app-ghibli-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent { //este cambio del contructor que permite el acceso del servicio público al privado permitirá encapsular esta inforamción
 constructor (private ghibliService: GhibliService){

 }
 get characters(): Character [] {
  return [...this.ghibliService.characters];
}
  onDeleteCharacter (id: string ):void{
      this.ghibliService.deleteCharacterById( id );
  }

  onNewCharacter (character: Character ): void {
    this.ghibliService.addCharacter( character );
  }
}

