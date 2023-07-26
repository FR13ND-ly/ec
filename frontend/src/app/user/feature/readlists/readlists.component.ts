import { Component } from '@angular/core';
import { BehaviorSubject, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-readlists',
  templateUrl: './readlists.component.html',
  styleUrls: ['./readlists.component.scss']
})
export class ReadlistsComponent {

  user$ = of({
    id: 1,
    name: 'Motricala Alin',
    image: 'https://curiodyssey.org/wp-content/uploads/bb-plugin/cache/Mammals-Raccoon-square-52c9ad2f0a59d708f8ea24ef926b0caf-58c5dbcca8b6f.jpg',
    readed: 55,
    likes: 12,
    listsCount: 3,
  })

  readlists$ = of([
    {
      id: 1,
      title: 'Readlist 1',
      description: 'Description 1',
      icon: 'bookmark',
      articles: [
        {
          url: 1,
          image: 'https://picsum.photos/300/200',
          title: 'Book 1',
        },
        {
          url: 2,
          image: 'https://picsum.photos/300/200',
          title: 'Book 2',
        },
        {
          url: 3,
          image: 'https://picsum.photos/300/200',
          title: 'Book 3',
        },
        {
          url: 4,
          image: 'https://picsum.photos/300/200',
          title: 'Book 3',
        },
        {
          url: 1,
          image: 'https://picsum.photos/300/200',
          title: 'Book 1 Lacrimosa capriciosa sosa',
        },
        {
          url: 2,
          image: 'https://picsum.photos/300/200',
          title: 'Book 2',
        },
        {
          url: 3,
          image: 'https://picsum.photos/300/200',
          title: 'Book 3',
        },
        {
          url: 4,
          image: 'https://picsum.photos/300/200',
          title: 'Book 3',
        },
      ]
    },
    {
      id: 2,
      title: 'Readlist 2',
      description: 'Description 2',
      icon: 'bookmark',
      articles: [
        {
          url: 1,
          image: 'https://picsum.photos/300/200',
          title: 'Book 1',
        },
        {
          url: 2,
          image: 'https://picsum.photos/300/200',
          title: 'Book 2',
        },
        {
          url: 3,
          image: 'https://picsum.photos/300/200',
          title: 'Book 3',
        },
        {
          url: 4,
          image: 'https://picsum.photos/300/200',
          title: 'Book 3',
        },
      ]
    },
    {
      id: 2,
      title: 'Readlist 2',
      description: 'Description 2',
      icon: 'bookmark',
      articles: [
        {
          url: 1,
          image: 'https://picsum.photos/300/200',
          title: 'Book 1',
        },
        {
          url: 2,
          image: 'https://picsum.photos/300/200',
          title: 'Book 2',
        },
        {
          url: 3,
          image: 'https://picsum.photos/300/200',
          title: 'Book 3',
        },
        {
          url: 4,
          image: 'https://picsum.photos/300/200',
          title: 'Book 3',
        },
      ]
    },
    {
      id: 2,
      title: 'Readlist 2',
      description: 'Description 2',
      icon: 'bookmark',
      articles: [
        {
          url: 1,
          image: 'https://picsum.photos/300/200',
          title: 'Book 1',
        },
        {
          url: 2,
          image: 'https://picsum.photos/300/200',
          title: 'Book 2',
        },
        {
          url: 3,
          image: 'https://picsum.photos/300/200',
          title: 'Book 3',
        },
        {
          url: 4,
          image: 'https://picsum.photos/300/200',
          title: 'Book 3',
        },
      ]
    },
    {
      id: 2,
      title: 'Readlist 2',
      description: 'Description 2',
      icon: 'bookmark',
      articles: [
        {
          url: 1,
          image: 'https://picsum.photos/300/200',
          title: 'Book 1',
        },
        {
          url: 2,
          image: 'https://picsum.photos/300/200',
          title: 'Book 2',
        },
        {
          url: 3,
          image: 'https://picsum.photos/300/200',
          title: 'Book 3',
        },
        {
          url: 4,
          image: 'https://picsum.photos/300/200',
          title: 'Book 3',
        },
      ]
    },
  ])

  selectedIndex$ = new BehaviorSubject<number | null>(null);


  selectedList$ = this.selectedIndex$.pipe(
    switchMap(index => {
      if (index === null) {
        return of(null);
      }
      return this.readlists$.pipe(
        map(readlists => readlists[index]),
      );
    }
  ))

  onSelectList(i : number) {
    this.selectedIndex$.next(i);
  }

  onCloseList() {
    this.selectedIndex$.next(null);
  }
}
