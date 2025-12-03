import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeToggleComponent],
  template: `
    <router-outlet></router-outlet>
    <app-theme-toggle></app-theme-toggle>
  `,
  styles: []
})
export class AppComponent {
  title = 'Location Guide';
}
