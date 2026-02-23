import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    @for (name of names; track name) {
      <p>{{ name }}</p>
    }
  `,
})
export class App {
  names = ['Anna', 'John', 'Maria'];
}
