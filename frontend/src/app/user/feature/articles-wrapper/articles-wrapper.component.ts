import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-wrapper',
  templateUrl: './articles-wrapper.component.html',
  styleUrls: ['./articles-wrapper.component.scss']
})
export class ArticlesWrapperComponent implements OnInit {

  articles : number[] = []

  ngOnInit(): void {
    this.articles.push(1)
  }
}
