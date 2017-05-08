import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'dir works!';
  x = false;

  clicked(){
    if(this.x)
      this.x = false
      else
      this.x = true
  }

  private items = [1,2,3,4,5,6];

  private value = 0;
}

