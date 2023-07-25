import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from 'src/app/state/app.store';
import { toggleUserSidebar } from 'src/app/state/user/user.actions';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent {

  router = inject(Router)

  authenticated$ = of(false)

  @ViewChild('userOverlay') overlayRef!: ElementRef

  @Input() open!: boolean | null 

  items = [
    { name: 'Dashboard', icon: 'dashboard', link: 'dashboard' },
    { name: 'Bibliotecă', icon: 'book', link: 'readliste' },
    { name: 'Setari', icon: 'settings', link: 'setari' },
  ]

  store = inject(Store<AppState>)

  onToggleSidebar(e : Event) {
    if (e.target != this.overlayRef.nativeElement) return
    this.store.dispatch(toggleUserSidebar())
  }

  onNavigate() {
    this.store.dispatch(toggleUserSidebar())
  }

  onAuth(provider: string) {
    this.authenticated$ = of(true)
  }

  onLogout() {
    this.authenticated$ = of(false)
  }
}
