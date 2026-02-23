import { Component } from '@angular/core';
import { Comments } from './comments';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Comments],
  template: `
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        Building for the web is fantastic!
      </article>

      @defer {
        <comments />
      }

    </div>
  `,
})
export class App {}
