import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe'
@Component({
  selector: 'rec-book-app-recipes-list',
  templateUrl: './recipes-list.component.html'
})
export class RecipesListComponent implements OnInit {

  // array of recipes 
  recipes : Recipe[] = [];
  a = new Recipe("Basbosa Bel 3asak","this is the best basbooosa ever!","https://modo3.com/thumbs/fit630x300/2767/1380466290/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B9%D9%85%D9%84_%D8%A7%D9%84%D8%A8%D8%B3%D8%A8%D9%88%D8%B3%D8%A9.jpg");
  b = new Recipe("Basbosa Bel Eshta","i luv this basbosa","http://efty.net/wp-content/uploads/2014/06/image-1.jpg");
  c = new Recipe("Basbosa 7lwa","i really adore this basbosaaaaa! ","https://rqeeqa.com/wp-content/uploads/2015/05/%D8%A8%D8%B3%D8%A8%D9%88%D8%B3%D8%A9-2.jpg");
  constructor() { }

  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();
  ngOnInit() {
  }

  onSelected(recipe : Recipe){
    console.log("Selected")
    console.log(recipe.description)
    this.recipeSelectedEvent.emit(recipe);
  }

}
