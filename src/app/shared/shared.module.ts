import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LoadingComponent } from './loading-spinner/loading.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { AlertComponent } from "./alert/alert.component";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { RecipeService } from "./services/recipe.service";
import { ShoppingListService } from "./services/shopping-list.service";

@NgModule({
  declarations: [
    LoadingComponent,
    AlertComponent
  ],
  imports:[
    CommonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    LoadingComponent,
    AlertComponent,
    CommonModule,
  ]
})
export class SharedModule {}
