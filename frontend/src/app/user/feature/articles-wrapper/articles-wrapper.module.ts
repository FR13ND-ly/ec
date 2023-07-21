import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesWrapperComponent } from './articles-wrapper.component';
import { RouterModule } from '@angular/router';
import { ArticleDetailsComponent } from '../../ui/article-details/article-details.component';
import { ArticleFeedComponent } from '../../ui/article-feed/article-feed.component';



@NgModule({
  declarations: [
    ArticlesWrapperComponent
  ],
  imports: [
    CommonModule,
    ArticleDetailsComponent,
    ArticleFeedComponent,
    RouterModule.forChild([
      { path: '', component: ArticlesWrapperComponent }
    ])
  ]
})
export class ArticlesWrapperModule { }
