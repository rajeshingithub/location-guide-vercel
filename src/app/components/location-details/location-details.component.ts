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
  styleUrl: './location-details.component.css' // Note: Angular 17+ uses styleUrl, older uses styleUrls
})
export class LocationDetailsComponent implements OnInit {
  location: Location | undefined;
  locationId: string = '';

  // Variable to hold the final css string
  headerImageCss: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.locationId = params['id'];
      this.location = this.locationService.getLocationById(this.locationId);

      // Calculate the image path immediately after getting location
      this.setHeaderImage();
    });
  }

  setHeaderImage(): void {
    if (!this.location) return;

    // Logic to map location name to your local assets
    // Based on your screenshot file names: banaras.png, khajuraho.png, mathura.png, ujjain.png
    const name = this.location.name.toLowerCase();
    let imageName = 'banaras.png'; // Default fallback

    if (name.includes('varanasi') || name.includes('banaras')) {
      imageName = 'banaras.png';
    } else if (name.includes('mathura')) {
      imageName = 'mathura.png';
    } else if (name.includes('ujjain')) {
      imageName = 'ujjain.png';
    } else if (name.includes('khajuraho')) {
      imageName = 'khajuraho.png';
    }

    // Set the full CSS string. 
    // IMPORTANT: 'assets/...' works because Angular serves 'src/assets' at the root '/assets'
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