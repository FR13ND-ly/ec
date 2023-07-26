import { Component, ElementRef, Input, ViewChild, inject, OnChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { timer } from 'rxjs';
import { AppState } from 'src/app/state/app.store';
import { toggleSearchSidebar } from 'src/app/state/search/search.actions';

@Component({
  selector: 'app-search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.scss']
})
export class SearchSidebarComponent {

  @ViewChild('searchOverlay') overlayRef!: ElementRef<HTMLDivElement>

  @Input() open!: boolean | null

  store = inject(Store<AppState>)

  onToggleSidebar(e : Event) {
    this.store.dispatch(toggleSearchSidebar())
  }
}
