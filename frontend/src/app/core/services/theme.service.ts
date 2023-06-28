import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(
    private localStorage: LocalStorageService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getTheme(): string {
    return this.localStorage.getItem('theme') || this.getUserPreferences();
  }

  displayTheme(): void {
    this.document.body.classList.toggle(
      'dark-theme',
      this.getTheme() == 'dark'
    );
  }

  getUserPreferences(): string {
    let theme = 'light';
    if (!isPlatformBrowser(this.platformId)) return theme;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      theme = 'dark';
    return 'theme';
  }

  toggleTheme(): void {
    if (this.getTheme() == 'light') this.localStorage.setItem('theme', 'dark');
    else this.localStorage.setItem('theme', 'light');
    this.displayTheme();
  }
}
