import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'article-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-details-header.component.html',
  styleUrls: ['./article-details-header.component.scss']
})
export class ArticleDetailsHeaderComponent {

  @Input() type: string | null = 'a'
  @Input() title: string | null = ''
  @Input() subtitle: string | null = ''
  @Input() image: string | null = ''
}
