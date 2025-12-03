import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ThemeService {
    private isDarkMode = new BehaviorSubject<boolean>(true);
    public isDarkMode$ = this.isDarkMode.asObservable();

    constructor() {
        // Check localStorage for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            this.isDarkMode.next(savedTheme === 'dark');
        } else {
            // Check system preference
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.isDarkMode.next(prefersDark);
        }
        this.applyTheme();
    }

    toggleTheme(): void {
        const newTheme = !this.isDarkMode.value;
        this.isDarkMode.next(newTheme);
        localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        this.applyTheme();
    }

    private applyTheme(): void {
        if (this.isDarkMode.value) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
    }

    getCurrentTheme(): boolean {
        return this.isDarkMode.value;
    }
}
