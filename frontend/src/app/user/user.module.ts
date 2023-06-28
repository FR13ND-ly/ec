import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSidebarComponent } from './search-sidebar/search-sidebar.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';



@NgModule({
  declarations: [
    SearchSidebarComponent,
    UserSidebarComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UserComponent }
    ])
  ]
})
export class UserModule { }
