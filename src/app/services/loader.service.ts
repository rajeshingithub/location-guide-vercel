import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    // Observable that components subscribe to
    public isLoading = new BehaviorSubject<boolean>(false);

    constructor() { }

    show(): void {
        this.isLoading.next(true);
    }

    hide(): void {
        // FIX: Add a 2000ms (2 second) delay before hiding the loader
        setTimeout(() => {
            this.isLoading.next(false);
        }, 2000);
    }
}