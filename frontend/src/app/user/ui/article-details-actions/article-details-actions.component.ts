import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/modules/material.module';

@Component({
  selector: 'article-actions',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './article-details-actions.component.html',
  styleUrls: ['./article-details-actions.component.scss']
})
export class ArticleDetailsActionsComponent {

}
