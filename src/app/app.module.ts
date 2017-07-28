import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventComponent } from './event.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
    AppComponent,
    EventComponent,

   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
