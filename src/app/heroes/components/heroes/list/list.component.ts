import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[]= ['Naoko', 'Marnie', 'Haru', 'Sheeta', 'Sophie'];
  public deletedHero?: string;

  removeLastHero():void {

    this.deletedHero = this.heroNames.pop();
    //si tengo un valor; cualquiera que sea quiere decir que se ha borrado uno
  }
}
