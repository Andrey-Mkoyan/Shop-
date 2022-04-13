import { RouterModule } from '@angular/router';
import { PagesModule } from './../../pages/pages.module';
import { NgModule } from "@angular/core";
import { MatMenuModule } from "@angular/material/menu";
import { SharedModule } from "src/app/shared/shared.module";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations:[
    HeaderComponent
  ],
  imports: [
    MatMenuModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class ComponentsModule {}
