import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe'
@Component({
  selector: 'rec-book-app-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

  // array of recipes 
  recipes : Recipe[] = [];
  a = new Recipe("Dummy","Dummy","https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png");
  constructor() { }

  ngOnInit() {
  }

}
