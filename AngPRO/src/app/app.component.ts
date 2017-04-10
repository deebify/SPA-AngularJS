import { Component } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class DataComponent {
  // All the Properties that can be accessed in HTML via {{}} interpolation
title = 'Angular App'  
age = new Date();
}
