import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'article-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-details-text.component.html',
  styleUrls: ['./article-details-text.component.scss']
})
export class ArticleDetailsTextComponent {

  @Input() text: string | null = ''

  @ViewChild('text') textElement: ElementRef<HTMLDivElement> | null = null

  
}
