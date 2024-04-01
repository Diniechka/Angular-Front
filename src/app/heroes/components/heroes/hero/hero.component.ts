import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  public name: string = 'nicky';
  public age: number = 13;

  get capitalizedName():string {
    return this.name.toUpperCase();

  }
  //Este es un método y se tiene que inovar usando paréntesis
  public getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }
  public changeName():void{
    this.name = 'Babayagá';
  }
  public changeAge():void{
    this.age = 100;
  }
  public resetForm():void{
    this.name='nicky',
    this.age= 13;
  }
}
