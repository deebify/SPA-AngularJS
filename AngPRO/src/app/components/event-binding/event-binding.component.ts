import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `
    <button (click)="onClicked()">Click me!</button>

  `,
  styles: []
})
export class EventBindingComponent  {
  // an EventEmitter
  @Output("clickable") clicked = new EventEmitter<string>();

  onClc(){
    //Event will Emit "it Works! String"
    this.clicked.emit("it works!")
  }

}
