import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LocationService } from '../../services/location.service';
import { Location } from '../../models/location.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  locations: Location[] = [];

  constructor(
    private locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.locations = this.locationService.getAllLocations();
  }

  navigateToLocation(locationId: string): void {
    this.router.navigate(['/location', locationId]);
  }
}
