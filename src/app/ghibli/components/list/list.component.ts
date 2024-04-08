import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'ghibli-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent { //información para renderizar; puede recibir una propiedad de nombre characterList
  @Input()
  public characterList: Character[]= [{
    name: 'Matilda',
    power: 5000
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?: string):void {

    if( !id ) return; //si el id no existe entonces que no lo llame
    console.log({ id });
    this.onDelete.emit( id );
  }
}
