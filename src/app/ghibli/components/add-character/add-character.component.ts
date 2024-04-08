import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'ghibli-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output() //es un objeto importado de angular/core; vamos a imitir un character <T> y creamos lainstancia
  public onNewCharacter: EventEmitter <Character> = new EventEmitter();

  public character: Character = {
      name: '',
      power: 0
    };
    emitCharacter():void{

      console.log(this.character);
      if (this.character.name.length === 0) return; //validación para no tolerar valores vacíos de nombre

      this.onNewCharacter.emit(this.character);

      this.character ={name:'', power: 0};

      //regresa los valores a los valores vacíos name = ''; this.character.power = 0;
    }
  }
