import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [NgOptimizedImage],
  template: `
    <p>Username: {{ username }}</p>
    <p>Preferred Framework:</p>
    <ul>
      <li>
        Static Image:
        <img ngSrc="/logo.svg" width="100" height="100" alt="Angular logo" />
      </li>
      <li>
        Dynamic Image:
        <img
          [ngSrc]="logoUrl"
          [alt]="logoAlt"
          width="100"
          height="100"
        />
      </li>
    </ul>
  `,
})
export class User {
  logoUrl = '/logo.svg';
  logoAlt = 'Angular logo';
  username = 'youngTech';
}