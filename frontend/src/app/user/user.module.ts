import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchSidebarComponent } from './feature/search-sidebar/search-sidebar.component';
import { UserSidebarComponent } from './feature/user-sidebar/user-sidebar.component';
import { UserComponent } from './user.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { MaterialModule } from '../core/modules/material.module';
import { UserRoutingModule } from './user-routing.module';



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
    MaterialModule,
    UserRoutingModule
  ]
})
export class UserModule { }
