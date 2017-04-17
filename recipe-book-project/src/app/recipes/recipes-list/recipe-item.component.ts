import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe' // this is the model
@Component({
  selector: 'rec-book-app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: []
})
export class RecipeItemComponent implements OnInit {
  // will be set from outside
  recipeId : Number;
  @Input() recipe : Recipe; // Recipe item
  constructor() { }

  ngOnInit() {
  }

}
