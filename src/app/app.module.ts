import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter.module';
import { GhibliModule } from './ghibli/ghibli.module';
import { HeroesModule } from './heroes/heroes.module';


// import { HeroComponent } from './heroes/hero/hero.component';
// import { ListComponent } from './heroes/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    // HeroComponent,
    // ListComponent //eliminé el component del counter y los pasé al import
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,//se añade y encapsula esta característica aquí
    GhibliModule,
    HeroesModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
