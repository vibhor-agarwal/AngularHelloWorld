import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoursesComponent } from './courses/courses.component'
import { CoursesService } from './courses/courses.service';

import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';

import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [
    AppComponent, CoursesComponent, AuthorsComponent, FavoriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
