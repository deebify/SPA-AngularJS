import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-app-data-binding',
  templateUrl: './app-data-binding.component.html',
  styles : [`.para { color:green; }`]
})
export class AppDataBindingComponent {
  // custom binding
  @Input() number : Number = 0;
  @Output() clicked = new EventEmitter<string>();

  // Add Properties 
  stringInterpolation = 'this is string interpolation';
  numberInterpolation = 1932;
  name = "Yassine"

  onTest(){
    return false;
  }

  onClicked(value : String){
    alert(value)
  }
}
