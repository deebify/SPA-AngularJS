import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    {{person.name}} -- {{person.age}}
    <input type="text" [(ngModel)]="person.name"> 
    <input type="text" [(ngModel)]="person.age"> 

  `,
  styles: []
})
export class TwoWayBindingComponent  {

  person = {
    name : 'Yassine',
    age : 23
  }

}
