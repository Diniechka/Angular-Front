import { NgModule } from "@angular/core";
import { ListComponent } from "./components/heroes/list/list.component";
import { HeroComponent } from "./components/heroes/hero/hero.component";
import { CommonModule } from "@angular/common";


@NgModule({
  exports: [
    HeroComponent,
    ListComponent
  ],
  declarations: [
    HeroComponent,
    ListComponent,
  ],
  imports: [
    CommonModule //la idea de las interacciones internas y encapsuladas en sus propios módulos
  ]
})

export class HeroesModule { }
