import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../services/location.service';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-location-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './location-details.component.html',
  styleUrl: './location-details.component.css'
})
export class LocationDetailsComponent implements OnInit {
  location: Location | undefined;
  locationId: string = '';
  headerImageCss: string = '';

  // Map variables
  mapPins: any[] = [];
  activePinId: string | null = null;
  staticMapUrl: string = 'assets/images/002.jpg';

  // --- GALLERY VARIABLES ---
  isGalleryOpen: boolean = false;
  currentImageIndex: number = 0;

  // 1. MAKE SURE THIS HAS IMAGES
  galleryImages: string[] = [
    'assets/images/a.jpeg',
    'assets/images/b.jpeg',
    'assets/images/c.jpeg',
    'assets/images/d.jpeg',
    'assets/images/e.jpeg'
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.locationId = params['id'];
      this.location = this.locationService.getLocationById(this.locationId);
      this.setHeaderImage();
      this.prepareMapPins();
    });
  }

  // --- GALLERY LOGIC ---
  openGallery(): void {
    console.log("Opening Gallery...", this.galleryImages); // Check Console

    if (this.galleryImages.length > 0) {
      this.currentImageIndex = 0;
      this.isGalleryOpen = true;
      document.body.style.overflow = 'hidden';
    } else {
      console.warn("No images to show in gallery!");
    }
  }

  closeGallery(): void {
    this.isGalleryOpen = false;
    document.body.style.overflow = 'auto';
  }

  nextImage(event?: Event): void {
    if (event) event.stopPropagation();
    if (this.currentImageIndex < this.galleryImages.length - 1) {
      this.currentImageIndex++;
    } else {
      this.currentImageIndex = 0;
    }
  }

  prevImage(event?: Event): void {
    if (event) event.stopPropagation();
    if (this.currentImageIndex > 0) {
      this.currentImageIndex--;
    } else {
      this.currentImageIndex = this.galleryImages.length - 1;
    }
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (!this.isGalleryOpen) return;
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
    if (event.key === 'Escape') this.closeGallery();
  }

  prepareMapPins(): void {
    this.mapPins = [];
    if (this.location && this.location.categories) {
      this.location.categories.forEach(cat => {
        // We include specific categories for the Main Location Map
        if (['Temples', 'Scenery'].includes(cat.name)) {
          cat.places.forEach(place => {
            // Only add if x/y coordinates exist for the static map
            if (place.x !== undefined && place.y !== undefined) {
              this.mapPins.push({
                ...place,
                categoryName: cat.name
              });
            }
          });
        }
      });
    }
  }

  togglePin(pinId: string): void {
    if (this.activePinId === pinId) {
      this.activePinId = null;
    } else {
      this.activePinId = pinId;
    }
  }

  // NEW: Navigation Function
  openGoogleMaps(lat: number, lng: number): void {
    this.locationService.navigateToPlace(lat, lng);
  }

  setHeaderImage(): void {
    if (!this.location) return;
    const name = this.location.name.toLowerCase();
    let imageName = 'banaras.png';

    if (name.includes('wada')) {
      imageName = 'd.jpeg';
    } else if (name.includes('mathura')) {
      imageName = 'mathura.png';
    } else if (name.includes('ujjain')) {
      imageName = 'ujjain.png';
    } else if (name.includes('khajuraho')) {
      imageName = 'khajuraho.png';
    }

    this.headerImageCss = `url('/assets/images/${imageName}')`;
  }

  isLargeCategory(name: string): boolean {
    const largeOnes = ['Temples', 'Scenery', 'Varanasi Temples'];
    return largeOnes.includes(name);
  }

  navigateToCategory(categoryId: string): void {
    this.router.navigate(['/location', this.locationId, 'category', categoryId]);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}