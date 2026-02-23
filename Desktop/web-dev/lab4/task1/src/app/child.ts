import { Component, output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <button (click)="addItem()">Add Item</button>
  `,
})
export class Child {
  itemAdded = output<void>();

  addItem() {
    this.itemAdded.emit();
  }
}