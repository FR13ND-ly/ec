import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { HeroComponent } from './hero/hero.component';
import { CategoriesComponent } from './categories/categories.component';
import { WidgetsSideComponent } from './widgets-side/widgets-side.component';
import { EditorialsComponent } from './editorials/editorials.component';
import { ArticlesComponent } from './articles/articles.component';
import { RouterModule } from '@angular/router';
import { VideosComponent } from './videos/videos.component';

@NgModule({
  declarations: [
    LandingPageComponent,
    HeroComponent,
    CategoriesComponent,
    WidgetsSideComponent,
    EditorialsComponent,
    ArticlesComponent,
    VideosComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LandingPageComponent }
    ])
  ]
})
export class LandingPageModule { }
