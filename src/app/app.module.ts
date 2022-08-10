import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { HeroeComponent } from './heroes/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    HeroeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }