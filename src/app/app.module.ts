import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ContentComponent } from './dashboard/content/content.component';
import { DashHeaderComponent } from './dashboard/dash-header/dash-header.component';
import { AllBlogsComponent } from './dashboard/all-blogs/all-blogs.component';
import { MyBlogsComponent } from './dashboard/my-blogs/my-blogs.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { AddBlogComponent } from './dashboard/add-blog/add-blog.component';
import {BlogListService} from "./blog-list.service";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {CanActivateService} from "./can-activate.service";
import {CategoryService} from "./category.service";
import { AddCategoryComponent } from './dashboard/categories/add-category/add-category.component';
import { AddImageComponent } from './dashboard/add-blog/add-image/add-image.component';
import {ImageService} from "./image.service";
import {MaterializeDirective, MaterializeModule} from "angular2-materialize";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LogInComponent,
    SignUpComponent,
    DashboardComponent,
    NavbarComponent,
    ContentComponent,
    DashHeaderComponent,
    AllBlogsComponent,
    MyBlogsComponent,
    CategoriesComponent,
    AddBlogComponent,

    AddCategoryComponent,
    AddImageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterializeModule,
    FormsModule,
    RouterModule.forRoot([
      {path : 'logIn' , component : LogInComponent},
      {path : 'signUp' , component : SignUpComponent},
      {path : '' , redirectTo  : 'logIn',pathMatch : 'full'},
      {path : 'dashboard', canActivate : [CanActivateService], component:DashboardComponent}
    ])
  ],
  providers: [BlogListService,CanActivateService,CategoryService,ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
