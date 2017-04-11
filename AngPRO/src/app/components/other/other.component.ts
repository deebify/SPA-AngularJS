import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styles : [`
    .app {
        width : 300px;
        height :auto;
        color : blue;
        background-color: yellow;   
    }
    article {
      color : green;
    }
  `
  ]})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
