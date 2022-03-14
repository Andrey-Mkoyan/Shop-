import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "src/app/pages/recipes/recipe.model";
import { Ingredient } from "../ingredient.model";

import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Testy Schnitzel',
      'A super-tasty Schnitzel - just awesome!',
      'https://www.jocooks.com/wp-content/uploads/2019/04/pork-schnitzel-1-750x938.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
     new Recipe(
      'Big Fat Burger',
      'What else you need to say!',
      'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/mbtg1wsd3zdqu3v3rpgd',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
