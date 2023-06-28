import { Component, OnInit, inject } from '@angular/core';
import { ThemeService } from '../core/services/theme.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.store';
import { userSidebarOpen } from '../state/user/user.selectors';
import { Observable } from 'rxjs'
import { searchSidebarOpen } from '../state/search/search.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  localStorageService = inject(ThemeService)
  store = inject(Store<AppState>)

  userSidebarOpen$ : Observable<boolean | null> = this.store.select(userSidebarOpen)
  searchSidebarOpen$ : Observable<boolean | null> = this.store.select(searchSidebarOpen)

  ngOnInit(): void {
    this.localStorageService.displayTheme()
  }

}
