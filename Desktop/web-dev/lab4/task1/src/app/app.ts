import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <section (mouseover)="showSecretMessage()">
      There's a secret message for you, hover to reveal 👀
      <p>{{ message }}</p>
    </section>
  `,
})
export class App {
  message = '';

  showSecretMessage() {
    this.message = ' Angular is awesome! ';
  }
}
