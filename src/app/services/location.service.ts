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
          mapImage: 'assets/images/loader.jpg',
          places: [
            {
              id: 'Dholya-Ganpati-Temple',
              name: 'Dholya Ganpati Temple',
              description: 'The term "Dholya Ganpati Temple" can refer to two main temples in Maharashtra',
              history: 'The Wai temple is known for its large, boat-shaped temple on the banks of the Krishna River, built in 1762. The Satara temple, a swayambhu (naturally occurring) idol, is the village deity and is also called Jyeshtha Raj. Both are dedicated to a large Ganesha idol, from which the name "Dholya" (meaning large or stout) is derived.',
              image: 'assets/images/img52.jpg',
              latitude: 17.9525851,
              longitude: 73.8861204,
              x: 45,
              y: 30,
              address: 'Maha Ganapati Temple, Ganpati Ali, Wai, Maharashtra 412803',
            },
            {
              id: 'Shree-Krishnabai-Temple',
              name: 'Shree Krishnabai Temple',
              description: 'The temple is located on a hilltop overlooking the Krishna Valley.',
              history: 'The Krishnabai Temple in Mahabaleshwar was built in 1888 by the ruler of Ratnagiri and is believed to be the source of the Krishna River. An older, legendary origin is said to date back to the Pandavas, with the 1888 reconstruction preserving its original charm, which includes ancient carvings, pillars, and a hall.',
              image: 'assets/images/img58.jpg',
              latitude: 17.9526951,
              longitude: 73.8857774,
              x: 55,
              y: 60,
              address: 'Gangapuri Rd, Gangapuri, Wai, Maharashtra 412803'
            },
            {
              id: 'Shri-Kashi-Vishweshwar-Mandir',
              name: 'Shri Kashi Vishweshwar Mandir',
              description: 'This is a very old Shiva temple built near the banks of Krishna river in Wai.',
              history: 'Shri Kashi Vishweshwar Mandir is an ancient Hindu temple dedicated to Lord Shiva, situated on the banks of the Krishna River in Wai, Maharashtra. Built in 1735 CE by Shripatrao Pant Pratinidhi, the temple showcases impressive Hemadpanthi architecture, characterized by massive stone slabs with minimal mortar.',
              image: 'assets/images/img54.jpg',
              latitude: 17.9529391,
              longitude: 73.8861083,
              x: 45,
              y: 30,
              address: 'Shri Kashi Vishweshwar Mandir, Ganpati Ali, Wai, Maharashtra 412803',
            },
            {
              id: 'Shri-Govind-Rameshwar-Temple',
              name: 'Shri Govind Rameshwar Temple',
              description: 'A Trikutachala shrine dedicated to the Vaishnavite deities Madhav and Govind.',
              history: 'The name "Shri Govind Rameshwar Temple" most likely refers to the Madhav, Govind, Rameshwar Temple in Agapur village, Goa, which is a Trikutachala (three-shrine) shrine dedicated to Vaishnavite deities, including Madhav (Krishna) and Govind, along with the Shaiv deity Rameshwar.',
              image: 'assets/images/img56.jpg',
              latitude: 17.953027,
              longitude: 73.886800,
              x: 55,
              y: 60,
              address: '434, Motibag Rd, Danebazar, Ganpati Ali, Wai, Maharashtra 412803'
            },
            {
              id: 'Maruti-Temple',
              name: 'Maruti Temple',
              description: 'A Hindu temple dedicated to Lord Hanuman, managed by the Bhadra Maruti.',
              history: 'The most famous "Maruti Temple" in Maharashtra is the Bhadra Maruti Temple in Khuldabad, near Aurangabad, which is unique because Lord Hanuman is depicted in a sleeping posture. Another significant set of Maruti temples includes the 11 temples built by Saint Samarth Ramdas near the Krishna River in the Satara region.',
              image: 'assets/images/img57.jpg',
              latitude: 17.953056513650587,
              longitude: 73.88662687493111,
              x: 55,
              y: 60,
              address: 'Gangapuri Rd, Ganpati Ali, Wai, Maharashtra 412803'
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
              id: 'wada-01',
              name: 'Wada 01',
              description: '',
              history: '',
              image: 'assets/images/wada.png',
              latitude: 17.95295140494581,
              longitude: 73.88769833586082,
              x: 85,
              y: 46,
              address: ''
            },
            {
              id: 'wada-02',
              name: 'Wada 02',
              description: '',
              history: '',
              image: 'assets/images/wada.png',
              latitude: 17.954043495999255,
              longitude: 73.88692501245275,
              x: 86,
              y: 22,
              address: ''
            },
            {
              id: 'wada-03',
              name: 'Wada 03',
              description: '',
              history: '',
              image: 'assets/images/wada.png',
              latitude: 17.954415115394063,
              longitude: 73.88825674820443,
              x: 64,
              y: 25,
              address: ''
            },
            {
              id: 'wada-04',
              name: 'Wada 04',
              description: '',
              history: '',
              image: 'assets/images/wada.png',
              latitude: 17.955386389669414,
              longitude: 73.88771517566542,
              x: 40,
              y: 24,
              address: ''
            },
            {
              id: 'wada-05',
              name: 'Wada 05',
              description: '',
              history: '',
              image: 'assets/images/wada.png',
              latitude: 17.95563976468983,
              longitude: 73.88641895286712,
              x: 22,
              y: 33,
              address: ''
            },
            {
              id: 'wada-06',
              name: 'Wada 06',
              description: '',
              history: '',
              image: 'assets/images/wada.png',
              latitude: 17.953460727648288,
              longitude: 73.88551337255598,
              x: 37,
              y: 93,
              address: ''
            },
            {
              id: 'wada-07',
              name: 'Wada 07',
              description: '',
              history: '',
              image: 'assets/images/wada.png',
              latitude: 17.954347548289466,
              longitude: 73.8848208699651,
              x: 9,
              y: 69,
              address: ''
            },
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
              id: 'toilet-01',
              name: 'Toilet 01',
              description: '',
              history: '',
              image: '',
              latitude: 17.953504879691035,
              longitude: 73.88717206033195,
              x: 90,
              y: 93,
              address: ''
            },
            {
              id: 'toilet-02',
              name: 'Toilet 02',
              description: '',
              history: '',
              image: '',
              latitude: 17.954637788271704,
              longitude: 73.88811083342895,
              x: 76,
              y: 36,
              address: ''
            },
            {
              id: 'toilet-03',
              name: 'Toilet 03',
              description: '',
              history: '',
              image: '',
              latitude: 17.954795986640075,
              longitude: 73.88748319655839,
              x: 54,
              y: 19,
              address: ''
            },
            {
              id: 'toilet-04',
              name: 'Toilet 04',
              description: '',
              history: '',
              image: '',
              latitude: 17.95588338303366,
              longitude: 73.88720347530689,
              x: 32,
              y: 32,
              address: ''
            },
            {
              id: 'toilet-05',
              name: 'Toilet 05',
              description: '',
              history: '',
              image: '',
              latitude: 17.955789278818447,
              longitude: 73.88587252102529,
              x: 8,
              y: 46,
              address: ''
            },
            {
              id: 'toilet-06',
              name: 'Toilet 06',
              description: '',
              history: '',
              image: '',
              latitude: 17.95589905543022,
              longitude: 73.88459137741582,
              x: 18,
              y: 80,
              address: ''
            }
          ]
        },
        {
          id: 'bus',
          name: 'Bus & Shelter Stand',
          icon: '🚌',
          showList: false,
          mapImage: 'assets/images/1.jpg',
          places: [
            {
              id: 'bus-stand-01',
              name: 'Bus Stand 01',
              description: '',
              history: '',
              image: 'assets/images/bus.png',
              latitude: 17.952336594136955,
              longitude: 73.88681982252608,
              x: 87,
              y: 88,
              address: ''
            },
            {
              id: 'bus-stand-02',
              name: 'Bus Stand 02',
              description: '',
              history: '',
              image: 'assets/images/bus.png',
              latitude: 17.954355847377244,
              longitude: 73.88468194442923,
              x: 27,
              y: 94,
              address: ''
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
