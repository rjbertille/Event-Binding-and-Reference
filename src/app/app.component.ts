import { Component } from '@angular/core';
import { EventComponent } from './event.component';

@Component({
  selector: 'app-root',
  template: `<h1>Hello {{name}}</h1>
             <my-event></my-event>`,
})
export class AppComponent  { name = 'Event Binding and References '; }
