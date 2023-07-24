import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadlistsComponent } from './readlists.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ReadlistsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ReadlistsComponent }
    ])
  ]
})
export class ReadlistsModule { }
