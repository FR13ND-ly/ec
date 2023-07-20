import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  selectedIndex$ = signal<number>(0);

  categories = [
    {
      name: 'Electronics',
      showName: 'Electronics'
    },
    {
      name: 'Fashion',
      showName: 'Fashion'
    },
    {
      name: 'Home & Kitchen',
      showName: 'Home & Kitchen'
    },
    {
      name: 'Sports',
      showName: 'Sports'
    },
    {
      name: 'Books',
      showName: 'Books'
    },
    {
      name: 'Toys',
      showName: 'Toys'
    },
  ]

  onSelectCategory(i : number) {
    this.selectedIndex$.set(i);
  }
}
