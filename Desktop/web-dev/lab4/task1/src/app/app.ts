import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User],
  template: `
    <app-user [name]="'Akerke'"></app-user>
  `,
})
export class App {}
