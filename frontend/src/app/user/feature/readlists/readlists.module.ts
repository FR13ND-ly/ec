import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadlistsComponent } from './readlists.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { ReadlistsDetailsComponent } from '../../ui/readlists-details/readlists-details.component';



@NgModule({
  declarations: [
    ReadlistsComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReadlistsDetailsComponent,
    RouterModule.forChild([
      { path: '', component: ReadlistsComponent }
    ])
  ]
})
export class ReadlistsModule { }
