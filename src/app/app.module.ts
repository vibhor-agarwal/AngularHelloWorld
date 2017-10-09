import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CoursesComponent } from './courses/courses.component'
import { CoursesService } from './courses/courses.service';

import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';

import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [
    AppComponent, CoursesComponent, AuthorsComponent, LikeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
