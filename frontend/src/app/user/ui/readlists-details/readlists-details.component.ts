import { Component, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/modules/material.module';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'list-details',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './readlists-details.component.html',
  styleUrls: ['./readlists-details.component.scss']
})
export class ReadlistsDetailsComponent {

  @Input() list: any;
  @Output() close = new EventEmitter();

  onCloseList() {
    this.close.emit();
  }
}
