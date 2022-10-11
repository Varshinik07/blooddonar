import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdddonarComponent } from './adddonar/adddonar.component';
import { SearchdonarComponent } from './searchdonar/searchdonar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeletedonarComponent } from './deletedonar/deletedonar.component';
import {RouterModule,Routes} from '@angular/router';
import { ViewAllDonarComponent } from './view-all-donar/view-all-donar.component';
import{HttpClientModule} from '@angular/common/http';
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
  {
    path:"view-all-donar",component:ViewAllDonarComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    AdddonarComponent,
    SearchdonarComponent,
    NavbarComponent,
    DeletedonarComponent,
    ViewAllDonarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
