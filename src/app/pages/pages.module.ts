import { RecipesModule } from './recipes/recipes.module';
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListModule } from "./shopping-list/shopping-list.module";

@NgModule({
  imports: [
    SharedModule,
    ShoppingListModule,
    RecipesModule
  ]
})
export class PagesModule {}
