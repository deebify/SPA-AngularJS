import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe'
@Component({
  selector: 'rec-book-app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

  @Input() selectedRecipe : Recipe;


  constructor() { }

  ngOnInit() {
  }

}
