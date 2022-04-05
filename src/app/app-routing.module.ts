import { AuthGuard } from './auth/auth.guard';
import { RecipesResolverService } from './shared/services/recipes-resolver.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './pages/recipes/recipes.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './pages/recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './pages/recipes/recipe-start/recipe-start.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
    {path: '', component: RecipeStartComponent },
    {path: 'new', component: RecipeEditComponent },
    {path: ':id', component: RecipeDetailComponent, resolve: [RecipesResolverService] },
    {path: ':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },
  ] },
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'auth', component: AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
