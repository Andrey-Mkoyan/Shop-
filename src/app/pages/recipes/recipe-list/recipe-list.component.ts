import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from './../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes!: Recipe[];
  subscription!: Subscription;

  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription= this.recipeService.recipesChanged
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes
      }
    )
     this.recipes = this.recipeService.getRecipes();
  }
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  onNewRecipeClick() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
