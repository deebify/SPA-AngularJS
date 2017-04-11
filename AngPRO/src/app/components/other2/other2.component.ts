import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other2',
  template: `
    <div class="app">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`.app { width: 200px; height: 200px; background-color : blue; color: red;}`]
  // there's a style shadow DOM where each component has it own style 
  // encapsulated that even if component inside component can't validate 
  // the style to each other -- view encapsulated 

  // it add style selector at the head of index.html as normal style selector through ID
})
export class Other2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
