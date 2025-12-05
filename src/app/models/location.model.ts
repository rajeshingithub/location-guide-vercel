export interface Location {
  id: string;
  name: string;
  image: string;
  description: string;
  mapImage?: string; // Fallback map for the city
  routes?: TravelRoute[];
  categories: Category[];
}

export interface TravelRoute {
  name: string;      // e.g., "Airport to City Center"
  duration: string;  // e.g., "45 mins"
  url: string;       // e.g., "https://www.google.com/maps/..."
}

export interface Category {
  id: string;
  name: string;
  icon: string;

  // NEW: Control list visibility from Service
  showList?: boolean;

  // NEW: Specific map for this category (optional)
  mapImage?: string;

  places: Place[];
}

export interface Place {
  id: string;
  name: string;
  description: string;
  history: string;
  image: string;
  latitude: number;
  longitude: number;
  address: string;
  x?: number;
  y?: number;
}