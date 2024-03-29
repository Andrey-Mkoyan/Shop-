import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { ComponentsModule } from './components/header/components.module';
import { CoreModule } from './core.module';
import { AuthModule } from './auth/auth.module';
import { shoppingListReducer } from './state/store/shopping-list.reducer';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PagesModule,
    // StoreModule.forRoot({shoppingList: shoppingListReducer}),
    SharedModule,
    ComponentsModule,
    CoreModule,
    AuthModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
