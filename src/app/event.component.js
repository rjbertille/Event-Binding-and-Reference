"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var EventComponent = (function () {
    function EventComponent() {
        this.title = "Tutorial from Regine";
    }
    EventComponent.prototype.onClick = function (value) {
        console.log(value);
    };
    return EventComponent;
}());
EventComponent = __decorate([
    core_1.Component({
        selector: 'my-event',
        template: "<h2>{{title}}</h2>\n               <button (mouseover)=\"onClick($event)\">Click Me</button>\n               <input type=\"text\" #demoInput>"
    })
], EventComponent);
exports.EventComponent = EventComponent;
//# sourceMappingURL=event.component.js.map