import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from './../../../shared/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes!: Recipe[];

  constructor(private recipeService: RecipeService,
  private router: Router,
  private route: ActivatedRoute) {}

  ngOnInit() {
     this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipeClick() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
