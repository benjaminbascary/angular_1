import { Component } from '@angular/core'

@Component({
  selector: 'app-counter',
  templateUrl: 'counter.component.html'
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