import { Component } from '@angular/core';
import { Child } from './child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Child],
  template: `
    <app-child (itemAdded)="onItemAdded()"></app-child>
    <p>Items added: {{ count }}</p>
  `,
})
export class App {
  count = 0;

  onItemAdded() {
    this.count++;
  }
}
