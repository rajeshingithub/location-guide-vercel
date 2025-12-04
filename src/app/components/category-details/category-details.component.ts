import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../services/location.service';
import { Category, Place, Location } from '../../models/location.model';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent implements OnInit, OnDestroy {
  category: Category | undefined;
  location: Location | undefined;

  locationId: string = '';
  categoryId: string = '';
  selectedPlace: Place | null = null;

  // Controlled by Service Data now
  shouldShowList: boolean = true;

  mapPins: any[] = [];
  activePinId: string | null = null;
  staticMapUrl: string = 'assets/images/default-map.jpg';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.locationId = params['locationId'];
      this.categoryId = params['categoryId'];

      this.location = this.locationService.getLocationById(this.locationId);

      if (this.location) {
        this.category = this.location.categories.find(c => c.id === this.categoryId);

        if (this.category) {
          // 1. IMAGE LOGIC: Check Category first, then Location, then Default
          if (this.category.mapImage) {
            this.staticMapUrl = this.category.mapImage;
          } else if (this.location.mapImage) {
            this.staticMapUrl = this.location.mapImage;
          }

          // 2. LIST VISIBILITY LOGIC: Default to true if undefined
          this.shouldShowList = this.category.showList !== false;

          this.prepareMapPins();
        }
      }
    });
  }

  ngOnDestroy(): void {
    document.body.classList.remove('modal-open');
  }

  prepareMapPins(): void {
    this.mapPins = [];
    if (this.category && this.category.places) {
      this.category.places.forEach(place => {
        if (place.x !== undefined && place.y !== undefined) {
          this.mapPins.push({
            ...place,
            categoryName: this.category!.name
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

  // UPDATED: Clickable Tooltip
  openGoogleMaps(event: Event, lat: number, lng: number): void {
    event.stopPropagation(); // Stop bubbling to pin container
    this.locationService.navigateToPlace(lat, lng);
  }

  // Navigate for Modal
  navigateToPlace(place: Place): void {
    this.locationService.navigateToPlace(place.latitude, place.longitude);
  }

  selectPlace(place: Place): void {
    this.selectedPlace = place;
    document.body.classList.add('modal-open');
  }

  closeDetails(): void {
    this.selectedPlace = null;
    document.body.classList.remove('modal-open');
  }

  goBack(): void {
    this.router.navigate(['/location', this.locationId]);
  }
}