import { Injectable } from '@angular/core';
import { Location, Category, Place } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations: Location[] = [
    {
      id: 'wada',
      name: 'Wada ',
      image: 'assets/images/d.jpeg',
      description: 'The spiritual capital of India, one of the oldest living cities in the world',
      mapImage: 'assets/images/002.jpg',
      categories: [
        {
          id: 'temples',
          name: 'Temples',
          icon: '🛕',
          showList: true,
          mapImage: 'assets/images/003.jpg',
          places: [
            {
              id: 'kashi-vishwanath',
              name: 'Kashi Vishwanath Temple',
              description: 'One of the most famous Hindu temples dedicated to Lord Shiva',
              history: 'The Kashi Vishwanath Temple is one of the twelve Jyotirlingas, the holiest of Shiva temples. The temple has been rebuilt several times throughout history. The current structure was built by Maharani Ahilya Bai Holkar of Indore in 1780. The temple\'s main deity is Lord Shiva, known as Vishwanatha or Vishweshwara, meaning "Ruler of the Universe". The temple complex is located on the western bank of the holy river Ganga and is a major pilgrimage destination.',
              image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
              latitude: 25.3109,
              longitude: 83.0107,
              x: 45,
              y: 30,

              address: 'Lahori Tola, Varanasi, Uttar Pradesh 221001',
            },
            {
              id: 'sankat-mochan',
              name: 'Sankat Mochan Hanuman Temple',
              description: 'Famous temple dedicated to Lord Hanuman',
              history: 'Founded by the great Hindu preacher and poet saint Shri Goswami Tulsidas in the early 16th century. The temple is dedicated to Lord Hanuman in his "Sankat Mochan" (reliever of troubles) form. According to legend, Tulsidas had a vision of Lord Hanuman at this very spot. The temple is known for its peaceful atmosphere and is visited by thousands of devotees daily.',
              image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800',
              latitude: 25.2677,
              longitude: 82.9913,
              x: 55,
              y: 60,
              address: 'Sankat Mochan, Varanasi, Uttar Pradesh 221005'
            },
            {
              id: 'kashi-vishwanath',
              name: 'Kashi Vishwanath Temple',
              description: 'One of the most famous Hindu temples dedicated to Lord Shiva',
              history: 'The Kashi Vishwanath Temple is one of the twelve Jyotirlingas, the holiest of Shiva temples. The temple has been rebuilt several times throughout history. The current structure was built by Maharani Ahilya Bai Holkar of Indore in 1780. The temple\'s main deity is Lord Shiva, known as Vishwanatha or Vishweshwara, meaning "Ruler of the Universe". The temple complex is located on the western bank of the holy river Ganga and is a major pilgrimage destination.',
              image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
              latitude: 25.3109,
              longitude: 83.0107,
              x: 45,
              y: 30,

              address: 'Lahori Tola, Varanasi, Uttar Pradesh 221001',
            },
            {
              id: 'sankat-mochan',
              name: 'Sankat Mochan Hanuman Temple',
              description: 'Famous temple dedicated to Lord Hanuman',
              history: 'Founded by the great Hindu preacher and poet saint Shri Goswami Tulsidas in the early 16th century. The temple is dedicated to Lord Hanuman in his "Sankat Mochan" (reliever of troubles) form. According to legend, Tulsidas had a vision of Lord Hanuman at this very spot. The temple is known for its peaceful atmosphere and is visited by thousands of devotees daily.',
              image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800',
              latitude: 25.2677,
              longitude: 82.9913,
              x: 55,
              y: 60,
              address: 'Sankat Mochan, Varanasi, Uttar Pradesh 221005'
            }
          ]
        },
        // {
        //   id: 'scenery',
        //   name: 'Scenery',
        //   icon: '🌅',
        //   places: [
        //     {
        //       id: 'dashashwamedh-ghat',
        //       name: 'Dashashwamedh Ghat',
        //       description: 'The main and oldest ghat of Varanasi, famous for Ganga Aarti',
        //       history: 'Dashashwamedh Ghat is the most spectacular ghat in Varanasi. The name means "the ghat of ten sacrificed horses". According to Hindu mythology, Lord Brahma created it to welcome Lord Shiva and sacrificed ten horses during the Dasa-Ashwamedha yajna performed here. The ghat is famous for its evening Ganga Aarti, a spectacular ritual performed by priests with fire, flowers, and incense.',
        //       image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800',
        //       latitude: 25.3095,
        //       longitude: 83.0134,
        //       x: 24,
        //       y: 40,
        //       address: 'Dashashwamedh Ghat Road, Varanasi, Uttar Pradesh 221001'
        //     },
        //     {
        //       id: 'assi-ghat',
        //       name: 'Assi Ghat',
        //       description: 'Southernmost ghat in Varanasi, popular for sunrise views',
        //       history: 'Assi Ghat is located at the confluence of the rivers Assi and Ganges. The ghat is associated with several legends and is mentioned in the Puranas. It is believed that Goddess Durga threw her sword here after killing the demon Shumbha-Nishumbha. The ghat is popular among students, tourists, and locals for yoga sessions and boat rides during sunrise.',
        //       image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800',
        //       latitude: 25.2820,
        //       longitude: 83.0051,
        //       x: 10,
        //       y: 80,
        //       address: 'Assi Ghat, Varanasi, Uttar Pradesh 221005'
        //     }
        //   ]
        // },
        {
          id: 'wada',
          name: 'Wada Mapping',
          icon: '🗺️',
          showList: false,
          mapImage: 'assets/images/2.jpg',
          places: [
            {
              id: 'ramnagar-fort-garden',
              name: 'Ramnagar Fort & Gardens',
              description: 'Historic fort with beautiful gardens overlooking the Ganges',
              history: 'Built in the 18th century by Kashi Naresh Raja Balwant Singh, the Ramnagar Fort is located on the eastern bank of the Ganges. The fort is made of chunar sandstone and serves as the ancestral home of the Maharaja of Banaras. The fort complex includes beautiful gardens, a museum with vintage cars, royal artifacts, and medieval costumes. The fort offers stunning views of the Ganges.',
              image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800',
              latitude: 25.2820,
              longitude: 83.0470,
              x: 40,
              y: 80,
              address: 'Ramnagar, Varanasi, Uttar Pradesh 221008'
            }
          ]
        },
        {
          id: 'toilets',
          name: 'Toilets Mapping',
          icon: '🚻',
          showList: false,
          mapImage: 'assets/images/3.jpg',
          places: [
            {
              id: 'ghat-facilities',
              name: 'Ghat Public Facilities',
              description: 'Clean public toilets available at major ghats',
              history: 'As part of the Swachh Bharat Mission and Smart City initiatives, Varanasi has developed modern public toilet facilities at all major ghats. These facilities are maintained by the Varanasi Municipal Corporation and are equipped with modern amenities. The initiative has significantly improved sanitation infrastructure for tourists and pilgrims.',
              image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
              latitude: 25.3095,
              longitude: 83.0134,
              x: 70,
              y: 60,
              address: 'Available at all major ghats in Varanasi'
            }
          ]
        },
        {
          id: 'bus',
          name: 'Bus & Shelter Stand',
          icon: '🚻',
          showList: false,
          mapImage: 'assets/images/2.jpg',
          places: [
            {
              id: 'ghat-facilities',
              name: 'Ghat Public Facilities',
              description: 'Clean public toilets available at major ghats',
              history: 'As part of the Swachh Bharat Mission and Smart City initiatives, Varanasi has developed modern public toilet facilities at all major ghats. These facilities are maintained by the Varanasi Municipal Corporation and are equipped with modern amenities. The initiative has significantly improved sanitation infrastructure for tourists and pilgrims.',
              image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
              latitude: 25.3095,
              longitude: 83.0134,
              x: 70,
              y: 60,
              address: 'Available at all major ghats in Varanasi'
            }
          ]
        }
      ]
    },
  ];

  constructor() { }

  getAllLocations(): Location[] { return this.locations; }

  getLocationById(id: string): Location | undefined {
    return this.locations.find(loc => loc.id === id);
  }

  getCategoryById(locationId: string, categoryId: string): Category | undefined {
    const location = this.getLocationById(locationId);
    return location?.categories.find(cat => cat.id === categoryId);
  }

  navigateToPlace(latitude: number, longitude: number): void {
    if (latitude && longitude) {
      const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
      window.open(url, '_blank');
    } else {
      console.error('Invalid Coordinates:', latitude, longitude);
    }
  }

  getPlaceById(locationId: string, categoryId: string, placeId: string): Place | undefined {
    const category = this.getCategoryById(locationId, categoryId);
    return category?.places.find(place => place.id === placeId);
  }
}
