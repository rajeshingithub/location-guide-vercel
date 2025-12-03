import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../services/location.service';
import { Category, Place } from '../../models/location.model';

@Component({
  selector: 'app-category-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css'
})
export class CategoryDetailsComponent implements OnInit, OnDestroy {
  category: Category | undefined;
  locationId: string = '';
  categoryId: string = '';
  selectedPlace: Place | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.locationId = params['locationId'];
      this.categoryId = params['categoryId'];
      this.category = this.locationService.getCategoryById(this.locationId, this.categoryId);
    });
  }

  ngOnDestroy(): void {
    // Clean up: remove modal-open class if component is destroyed while modal is open
    document.body.classList.remove('modal-open');
  }

  selectPlace(place: Place): void {
    this.selectedPlace = place;
    // Prevent body scroll when modal opens
    document.body.classList.add('modal-open');
  }

  closeDetails(): void {
    this.selectedPlace = null;
    // Re-enable body scroll when modal closes
    document.body.classList.remove('modal-open');
  }

  navigateToPlace(place: Place): void {
    this.locationService.navigateToPlace(place.latitude, place.longitude);
  }

  goBack(): void {
    this.router.navigate(['/location', this.locationId]);
  }
}