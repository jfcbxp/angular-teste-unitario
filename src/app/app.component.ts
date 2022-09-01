import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <app-banking></app-banking>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
