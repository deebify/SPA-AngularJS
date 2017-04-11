import { Component } from '@angular/core';

// Decorators from angular framework that define component
// turn the simple class to a angular component 

@Component({
  // selector: '#app-dev' <div id="app-dev"></div> as a selector id 
  // selector: 'app-dev' <app-dev> </app-dev> as a html tag
  selector: 'app-dev', // the Selector that will work under it. --> (index.html) 
  templateUrl: './app.component.html', // attached to HTML file
  styleUrls: ['./app.component.css']   // attached to CSSs files
})

// the class which will be attached to app.module to bootstrap this class
export class DataComponent {
  // All the Properties that can be accessed in HTML via {{}} interpolation
title = 'Angular App'  
age = new Date();
name = 'Yassine Abdul-Rahman'
}
