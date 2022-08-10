import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./hero/hero.component";
import { HeroesListComponent } from "./heroes-list/heroes-list.component";

@NgModule({
  declarations: [
    HeroeComponent,
    HeroesListComponent
  ],
  exports: [
    HeroesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {}