import { Component } from '@angular/core';

@Component({
  selector: 'comments',
  standalone: true,
  template: `
    <h3>Comments</h3>
    <p>This section was lazy loaded using &#64;defer 🚀</p>
  `,
})
export class Comments {}
