import { Component, ElementRef, Input, ViewChild, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.store';
import { toggleUserSidebar } from 'src/app/state/user/user.actions';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent {

  @ViewChild('userOverlay') overlayRef!: ElementRef

  @Input() open!: boolean | null 

  store = inject(Store<AppState>)

  onToggleSidebar(e : Event) {
    if (e.target != this.overlayRef.nativeElement) return
    this.store.dispatch(toggleUserSidebar())
  }
}
