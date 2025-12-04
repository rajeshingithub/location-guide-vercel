import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ThemeToggleComponent, LoaderComponent],
  template: `
    <app-loader></app-loader>
    <router-outlet></router-outlet>
    <app-theme-toggle></app-theme-toggle>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Location Guide';

  constructor(
    private loaderService: LoaderService,
    private router: Router
  ) { }

  ngOnInit() {
    // Show loader initially
    this.loaderService.show();

    // Listen to router events to show/hide loader on every navigation
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        // Show loader when navigation starts
        this.loaderService.show();
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        // Hide loader when navigation ends, is cancelled, or errors
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          this.loaderService.hide();
        }, 500);
      }
    });
  }
}
