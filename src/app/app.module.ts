import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { RecipeListComponent } from './pages/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './pages/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './pages/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './pages/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './pages/shopping-list/shopping-edit/shopping-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { RecipeService } from './shared/services/recipe.service';
import { ShoppingListService } from './shared/services/shopping-list.service';
import { RecipeStartComponent } from './pages/recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './pages/recipes/recipe-edit/recipe-edit.component';
import { AuthComponent } from './auth/auth.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoadingComponent } from './shared/loading-spinner/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingComponent,
    AlertComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    RecipeService,
    ShoppingListService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
