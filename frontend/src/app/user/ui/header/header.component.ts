import { Component, ElementRef, HostListener, ViewChild, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { ThemeService } from 'src/app/core/services/theme.service';
import { AppState } from 'src/app/state/app.store';
import { toggleSearchSidebar } from 'src/app/state/search/search.actions';
import { toggleUserSidebar } from 'src/app/state/user/user.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  @ViewChild('header') headerRef!: ElementRef

  themeService = inject(ThemeService)
  store = inject(Store<AppState>)

  @HostListener("window:scroll", ['$event']) onWindowScroll($event : any) {
    this.headerRef.nativeElement.classList.toggle(
      'sticked',
      $event.srcElement.documentElement.scrollTop > 30
    );
  }

  onToggleTheme() {
    this.themeService.toggleTheme()
  }

  onToggleUserSidebar() {
    this.store.dispatch(toggleUserSidebar())
  }

  onToggleSearchSidebar() {
    this.store.dispatch(toggleSearchSidebar())
  }

}
