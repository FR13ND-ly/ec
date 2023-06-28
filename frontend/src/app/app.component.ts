import { Component, OnInit, inject } from '@angular/core';
import { ThemeService } from './core/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  themeService = inject(ThemeService)

  ngOnInit(): void {
    this.themeService.displayTheme()
  }
  
}
