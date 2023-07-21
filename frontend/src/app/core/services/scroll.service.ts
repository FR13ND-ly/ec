import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  @Inject(DOCUMENT) document: Document = inject(DOCUMENT)

  toggleVisibility(): void {
    this.document.body.classList.toggle('no-scroll')
  }
}
