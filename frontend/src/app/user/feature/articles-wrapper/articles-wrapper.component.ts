import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-articles-wrapper',
  templateUrl: './articles-wrapper.component.html',
  styleUrls: ['./articles-wrapper.component.scss']
})
export class ArticlesWrapperComponent implements OnInit {

  articles$ = of([
    {
      headerType: 'b',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
      image: 'https://i.pinimg.com/originals/ab/85/bf/ab85bffa87c5a40419b7e03f0ec7b8e0.jpg',
      text: `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
      `
    }
  ])

  ngOnInit(): void {
  }
}
