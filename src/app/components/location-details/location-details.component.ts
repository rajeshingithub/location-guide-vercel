import { Component, OnInit } from '@angular/core';
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

  // Static Map Variables
  mapPins: any[] = [];
  activePinId: string | null = null;
  staticMapUrl: string = '/assets/images/1.jpg'; // Ensure this image exists!

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

      // Update Map Image Logic
      if (this.location && this.location.mapImage) {
        this.staticMapUrl = this.location.mapImage;
      }

      this.prepareMapPins();
    });
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