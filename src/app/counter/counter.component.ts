import { Component } from '@angular/core'

@Component({
  selector: 'app-counter',
  template: `
    <div class="main__component__container">
      <div class="main__title">
        {{title}}
      </div>
      <div class="main__count">
        <span>{{ count }}</span>
        <span>The base is: <strong>{{base}}</strong></span>
      </div>
      <div class="main__buttons">
        <button (click)="setCount(true)">Add</button>
        <button (click)="setCount(false)">Substract</button>
      </div>
    </div>
  `
})
export class CounterComponent {
  public title: string = 'Counter App';
  public subTitle: string = 'Counter!';
  public count: number = 0;
  public base: number = 5;

  setCount(action: boolean) {
    if (action) {
      this.count = this.count + this.base;
    } else {
      this.count = this.count - this.base;
    }
  }

}