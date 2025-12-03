export interface Location {
  id: string;
  name: string;
  image: string;
  description: string;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  icon: string;
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
}
