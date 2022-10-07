import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonarComponent } from './adddonar/adddonar.component';
import { SearchdonarComponent } from './searchdonar/searchdonar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeletedonarComponent } from './deletedonar/deletedonar.component';
import {RouterModule,Routes} from '@angular/router';

const appRoutes:Routes=[
  {
    path:"",component:AdddonarComponent
  },
  {
    path:"search",component:SearchdonarComponent
  },
  {
    path:"delete",component:DeletedonarComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    AdddonarComponent,
    SearchdonarComponent,
    NavbarComponent,
    DeletedonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
