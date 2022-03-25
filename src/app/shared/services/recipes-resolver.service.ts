import { DataStorageService } from './data-storage.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "src/app/pages/recipes/recipe.model";
import { RecipeService } from './recipe.service';


@Injectable({
  providedIn:'root'
})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorageService: DataStorageService,  private recipeService: RecipeService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if(recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    }else {
      return recipes;
    }

  }
}
