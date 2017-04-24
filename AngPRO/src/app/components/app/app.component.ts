import { Component } from '@angular/core';

@Component({
  selector: 'app-dev', // the Selector that will work under it. --> (index.html) 
  templateUrl: 'app.component.html', // attached to HTML file

})
export class DataComponent {
  title = 'Angular App'  
  age = new Date();
  name = 'Yassine Abdul-Rahman'
}
