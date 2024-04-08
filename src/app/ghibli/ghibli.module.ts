import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; //reutiliza modulos importados en otros lugares
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddCharacterComponent,
  ],
  exports: [
    MainPageComponent, //este módulo se verá desde fuera
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})

export class GhibliModule { }
