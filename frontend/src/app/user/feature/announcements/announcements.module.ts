import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnnouncementsComponent } from './announcements.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AnnouncementsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: AnnouncementsComponent },
    ]),
  ],
})
export class AnnouncementsModule {}
