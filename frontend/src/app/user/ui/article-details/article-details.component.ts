import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailsHeaderComponent } from '../article-details-header/article-details-header.component';
import { of } from 'rxjs';
import { ArticleDetailsTextComponent } from '../article-details-text/article-details-text.component';
import { ArticleDetailsActionsComponent } from '../article-details-actions/article-details-actions.component';
import { ArticleDetailsChaptersComponent } from '../article-details-chapters/article-details-chapters.component';

@Component({
  selector: 'user-article-details',
  standalone: true,
  imports: [CommonModule, ArticleDetailsHeaderComponent, ArticleDetailsTextComponent, ArticleDetailsActionsComponent, ArticleDetailsChaptersComponent],
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})
export class ArticleDetailsComponent {
  
  @Input() article!: any;

}
