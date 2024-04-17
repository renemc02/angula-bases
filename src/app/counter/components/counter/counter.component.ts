import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

  <h3>
      Counter: {{ Counter }}
  <h3>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>

  `,
})

export class CounterComponent  {

  public Counter: number = 10;

  increaseBy( value: number ): void {
      this.Counter += value;
  }

  resetCounter(): void {
    this.Counter = 10;

  }
}

