import { RecipeService } from 'src/app/shared/services/recipe.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/app/pages/recipes/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authService: AuthService
    ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put('https://recipe-book-2f9c4-default-rtdb.firebaseio.com/recipes.json', recipes)
    .subscribe(response => {
      console.log(response)
    });
  }
  fetchRecipes() {
    return this.http.get<Recipe[]>('https://recipe-book-2f9c4-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map(recipes => {
          return recipes.map(recipes => {
          return {...recipes, ingredients: recipes.ingredients ? recipes.ingredients : []};
          })
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes)
        })
      )
  }
}
