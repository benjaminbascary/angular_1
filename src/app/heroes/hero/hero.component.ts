import { Component } from "@angular/core";


@Component({
  selector: 'app-hero',
  templateUrl: 'hero.component.html'
})
export class HeroeComponent {
  name: string = 'SpiderMan';
  age: number = 24;

  getName(): string {
    return `${ this.name} - ${this.age}`
  }

  get capitalizedName(): string {
    return this.name;
  }

  changeName(): void {
    this.name = "Iron man";
  }

  changeAge(): void {
    this.age = 40;
  }
}