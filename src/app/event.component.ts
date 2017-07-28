import { Component } from '@angular/core';

@Component({
    selector: 'my-event',
    template: `<h2>{{title}}</h2>
               <button (mouseover)="onClick($event)">Click Me</button>
               <input type="text" #demoInput>`
               /*<button (click)="onClick(demoInput.value)">Click Me</button>*/
})
export class EventComponent { 
    public title = "Tutorial from Regine";
    onClick(value){
        console.log(value);
    }
    
}