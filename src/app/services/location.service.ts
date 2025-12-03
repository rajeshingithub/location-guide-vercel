import { Injectable } from '@angular/core';
import { Location, Category, Place } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations: Location[] = [
    {
      id: 'banaras',
      name: 'Varanasi (Banaras)',
      image: 'assets/images/banaras.png',
      description: 'The spiritual capital of India, one of the oldest living cities in the world',
      categories: [
        {
          id: 'temples',
          name: 'Temples',
          icon: '🛕',
          places: [
            {
              id: 'kashi-vishwanath',
              name: 'Kashi Vishwanath Temple',
              description: 'One of the most famous Hindu temples dedicated to Lord Shiva',
              history: 'The Kashi Vishwanath Temple is one of the twelve Jyotirlingas, the holiest of Shiva temples. The temple has been rebuilt several times throughout history. The current structure was built by Maharani Ahilya Bai Holkar of Indore in 1780. The temple\'s main deity is Lord Shiva, known as Vishwanatha or Vishweshwara, meaning "Ruler of the Universe". The temple complex is located on the western bank of the holy river Ganga and is a major pilgrimage destination.',
              image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
              latitude: 25.3109,
              longitude: 83.0107,
              address: 'Lahori Tola, Varanasi, Uttar Pradesh 221001'
            },
            {
              id: 'sankat-mochan',
              name: 'Sankat Mochan Hanuman Temple',
              description: 'Famous temple dedicated to Lord Hanuman',
              history: 'Founded by the great Hindu preacher and poet saint Shri Goswami Tulsidas in the early 16th century. The temple is dedicated to Lord Hanuman in his "Sankat Mochan" (reliever of troubles) form. According to legend, Tulsidas had a vision of Lord Hanuman at this very spot. The temple is known for its peaceful atmosphere and is visited by thousands of devotees daily.',
              image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800',
              latitude: 25.2677,
              longitude: 82.9913,
              address: 'Sankat Mochan, Varanasi, Uttar Pradesh 221005'
            }
          ]
        },
        {
          id: 'scenery',
          name: 'Scenery',
          icon: '🌅',
          places: [
            {
              id: 'dashashwamedh-ghat',
              name: 'Dashashwamedh Ghat',
              description: 'The main and oldest ghat of Varanasi, famous for Ganga Aarti',
              history: 'Dashashwamedh Ghat is the most spectacular ghat in Varanasi. The name means "the ghat of ten sacrificed horses". According to Hindu mythology, Lord Brahma created it to welcome Lord Shiva and sacrificed ten horses during the Dasa-Ashwamedha yajna performed here. The ghat is famous for its evening Ganga Aarti, a spectacular ritual performed by priests with fire, flowers, and incense.',
              image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800',
              latitude: 25.3095,
              longitude: 83.0134,
              address: 'Dashashwamedh Ghat Road, Varanasi, Uttar Pradesh 221001'
            },
            {
              id: 'assi-ghat',
              name: 'Assi Ghat',
              description: 'Southernmost ghat in Varanasi, popular for sunrise views',
              history: 'Assi Ghat is located at the confluence of the rivers Assi and Ganges. The ghat is associated with several legends and is mentioned in the Puranas. It is believed that Goddess Durga threw her sword here after killing the demon Shumbha-Nishumbha. The ghat is popular among students, tourists, and locals for yoga sessions and boat rides during sunrise.',
              image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800',
              latitude: 25.2820,
              longitude: 83.0051,
              address: 'Assi Ghat, Varanasi, Uttar Pradesh 221005'
            }
          ]
        },
        {
          id: 'gardens',
          name: 'Gardens',
          icon: '🌳',
          places: [
            {
              id: 'ramnagar-fort-garden',
              name: 'Ramnagar Fort & Gardens',
              description: 'Historic fort with beautiful gardens overlooking the Ganges',
              history: 'Built in the 18th century by Kashi Naresh Raja Balwant Singh, the Ramnagar Fort is located on the eastern bank of the Ganges. The fort is made of chunar sandstone and serves as the ancestral home of the Maharaja of Banaras. The fort complex includes beautiful gardens, a museum with vintage cars, royal artifacts, and medieval costumes. The fort offers stunning views of the Ganges.',
              image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800',
              latitude: 25.2820,
              longitude: 83.0470,
              address: 'Ramnagar, Varanasi, Uttar Pradesh 221008'
            }
          ]
        },
        {
          id: 'toilets',
          name: 'Public Facilities',
          icon: '🚻',
          places: [
            {
              id: 'ghat-facilities',
              name: 'Ghat Public Facilities',
              description: 'Clean public toilets available at major ghats',
              history: 'As part of the Swachh Bharat Mission and Smart City initiatives, Varanasi has developed modern public toilet facilities at all major ghats. These facilities are maintained by the Varanasi Municipal Corporation and are equipped with modern amenities. The initiative has significantly improved sanitation infrastructure for tourists and pilgrims.',
              image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
              latitude: 25.3095,
              longitude: 83.0134,
              address: 'Available at all major ghats in Varanasi'
            }
          ]
        },
        {
          id: 'cafeteria',
          name: 'Cafeteria',
          icon: '☕',
          places: [
            {
              id: 'blue-lassi',
              name: 'Blue Lassi Shop',
              description: 'World-famous lassi shop serving traditional Indian yogurt drinks',
              history: 'Established in 1925, Blue Lassi is one of the oldest and most famous lassi shops in Varanasi. Located in a narrow lane near Kashi Vishwanath Temple, this small shop has been serving delicious lassis for four generations. The walls are covered with photographs and notes from visitors worldwide. They offer over 100 varieties of lassi, from traditional sweet and salty to exotic fruit flavors.',
              image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800',
              latitude: 25.3104,
              longitude: 83.0107,
              address: 'Kachori Gali, Varanasi, Uttar Pradesh 221001'
            },
            {
              id: 'pizzeria-vaatika',
              name: 'Pizzeria Vaatika Cafe',
              description: 'Rooftop cafe with Ganges view serving international cuisine',
              history: 'A popular rooftop restaurant offering panoramic views of the Ganges and the ghats. Established in the early 2000s, it has become a favorite among travelers for its relaxed atmosphere, good food, and stunning sunset views. The cafe serves a mix of Indian and international cuisine, including wood-fired pizzas, pasta, and traditional Indian dishes.',
              image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
              latitude: 25.3095,
              longitude: 83.0130,
              address: 'D-3/24, Pandey Ghat, Varanasi, Uttar Pradesh 221001'
            }
          ]
        }
      ]
    },
    {
      id: 'mathura',
      name: 'Mathura',
      image: 'assets/images/mathura.png',
      description: 'The birthplace of Lord Krishna, a sacred city with rich cultural heritage',
      categories: [
        {
          id: 'temples',
          name: 'Temples',
          icon: '🛕',
          places: [
            {
              id: 'krishna-janmabhoomi',
              name: 'Krishna Janmabhoomi Temple',
              description: 'The birthplace of Lord Krishna',
              history: 'Krishna Janmabhoomi is one of the most sacred sites in Hinduism, marking the exact spot where Lord Krishna was born over 5,000 years ago. The temple complex has a tumultuous history, having been destroyed and rebuilt multiple times. The current structure includes a prison cell (Garbha Griha) where Krishna is believed to have been born. The temple attracts millions of devotees, especially during Janmashtami celebrations.',
              image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
              latitude: 27.5036,
              longitude: 77.6737,
              address: 'Krishna Janmasthan, Mathura, Uttar Pradesh 281001'
            },
            {
              id: 'dwarkadhish-temple',
              name: 'Dwarkadhish Temple',
              description: 'Beautiful temple dedicated to Lord Krishna',
              history: 'Built in 1814 by Seth Gokul Das Parikh, the treasurer of Gwalior, Dwarkadhish Temple is one of the largest and most revered temples in Mathura. The temple is dedicated to Lord Krishna in his Dwarkadhish form (King of Dwarka). The architecture is a fine example of Rajput style with intricate carvings and paintings depicting scenes from Krishna\'s life. The temple is famous for its elaborate celebrations during Janmashtami and Holi.',
              image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800',
              latitude: 27.5046,
              longitude: 77.6727,
              address: 'Dwarkadhish Temple Road, Mathura, Uttar Pradesh 281001'
            }
          ]
        },
        {
          id: 'scenery',
          name: 'Scenery',
          icon: '🌅',
          places: [
            {
              id: 'vishram-ghat',
              name: 'Vishram Ghat',
              description: 'Sacred bathing ghat on the Yamuna River',
              history: 'Vishram Ghat is the most important ghat in Mathura, where Lord Krishna is believed to have rested after killing the tyrant king Kansa. "Vishram" means rest in Hindi. The ghat is the main bathing and ceremonial ghat on the Yamuna River. Every evening, a beautiful aarti is performed here. The ghat is surrounded by numerous temples and is a hub of religious and cultural activities.',
              image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800',
              latitude: 27.5046,
              longitude: 77.6837,
              address: 'Vishram Ghat, Mathura, Uttar Pradesh 281001'
            }
          ]
        },
        {
          id: 'gardens',
          name: 'Gardens',
          icon: '🌳',
          places: [
            {
              id: 'vrindavan-gardens',
              name: 'Vrindavan Gardens',
              description: 'Sacred groves where Krishna spent his childhood',
              history: 'Vrindavan, located near Mathura, is the place where Lord Krishna spent his childhood. The area is dotted with beautiful gardens, temples, and sacred groves. According to Hindu mythology, Krishna performed his divine pastimes (leelas) here with Radha and the gopis. The gardens are filled with tulsi (holy basil) plants and flowering trees. Nidhivan is a particularly sacred grove believed to be the site of Krishna\'s Raas Leela.',
              image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800',
              latitude: 27.5810,
              longitude: 77.6970,
              address: 'Vrindavan, Mathura, Uttar Pradesh 281121'
            }
          ]
        },
        {
          id: 'toilets',
          name: 'Public Facilities',
          icon: '🚻',
          places: [
            {
              id: 'temple-facilities',
              name: 'Temple Complex Facilities',
              description: 'Modern facilities at major temple complexes',
              history: 'Mathura has significantly improved its public infrastructure in recent years. All major temples and ghats now have clean, well-maintained public toilet facilities. The Mathura-Vrindavan Development Authority has installed modern Sulabh Shauchalayas (public toilets) at strategic locations throughout the city to serve the millions of pilgrims who visit annually.',
              image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
              latitude: 27.5046,
              longitude: 77.6737,
              address: 'Available at major temples and ghats'
            }
          ]
        },
        {
          id: 'cafeteria',
          name: 'Cafeteria',
          icon: '☕',
          places: [
            {
              id: 'brijwasi-sweets',
              name: 'Brijwasi Mithai Wala',
              description: 'Famous sweet shop serving traditional Mathura pedas',
              history: 'Established in 1946, Brijwasi Mithai Wala is synonymous with Mathura pedas, a traditional sweet made from khoya (reduced milk). The shop has been serving authentic Mathura sweets for over 75 years and has become an institution in itself. Their pedas are famous throughout India and are a must-try for anyone visiting Mathura. The shop also serves other traditional sweets and snacks.',
              image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800',
              latitude: 27.5046,
              longitude: 77.6727,
              address: 'Chowk Bazaar, Mathura, Uttar Pradesh 281001'
            }
          ]
        }
      ]
    },
    {
      id: 'ujjain',
      name: 'Ujjain',
      image: 'assets/images/ujjain.png',
      description: 'Ancient city and one of the seven sacred cities in Hinduism, home to Mahakaleshwar Jyotirlinga',
      categories: [
        {
          id: 'temples',
          name: 'Temples',
          icon: '🛕',
          places: [
            {
              id: 'mahakaleshwar',
              name: 'Mahakaleshwar Temple',
              description: 'One of the twelve Jyotirlingas, dedicated to Lord Shiva',
              history: 'Mahakaleshwar Temple is one of the most revered temples in India and houses one of the twelve Jyotirlingas. The temple is unique as the lingam is believed to be Swayambhu (self-manifested) and derives its power from within. The temple has a rich history dating back to ancient times and is mentioned in various Puranas. The temple is famous for its Bhasma Aarti, performed early morning with sacred ash. The current structure was built during the Maratha period.',
              image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
              latitude: 23.1828,
              longitude: 75.7683,
              address: 'Mahakal Marg, Ujjain, Madhya Pradesh 456006'
            },
            {
              id: 'harsiddhi-temple',
              name: 'Harsiddhi Temple',
              description: 'Ancient Shakti Peeth dedicated to Goddess Harsiddhi',
              history: 'Harsiddhi Temple is one of the 51 Shakti Peethas and is dedicated to Goddess Harsiddhi, an aspect of Goddess Parvati. According to legend, the elbow of Goddess Sati fell here. The temple has been a center of Tantric worship for centuries. The temple features two tall pillars with lamps that are lit during Navratri. The current structure was built during the Maratha period by the queen of Maharaja Chhatrapati Shivaji.',
              image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800',
              latitude: 23.1765,
              longitude: 75.7885,
              address: 'Harsiddhi Temple Road, Ujjain, Madhya Pradesh 456001'
            }
          ]
        },
        {
          id: 'scenery',
          name: 'Scenery',
          icon: '🌅',
          places: [
            {
              id: 'ram-ghat',
              name: 'Ram Ghat',
              description: 'Sacred ghat on the Shipra River for holy baths',
              history: 'Ram Ghat is the main bathing ghat on the banks of the holy Shipra River in Ujjain. The ghat is particularly significant during the Kumbh Mela, which is held in Ujjain every 12 years. According to Hindu mythology, Lord Rama bathed here during his exile, hence the name. The ghat comes alive during the evening aarti when hundreds of lamps are floated on the river. The ghat is also used for various religious ceremonies and rituals.',
              image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800',
              latitude: 23.1765,
              longitude: 75.7885,
              address: 'Ram Ghat Road, Ujjain, Madhya Pradesh 456006'
            }
          ]
        },
        {
          id: 'gardens',
          name: 'Gardens',
          icon: '🌳',
          places: [
            {
              id: 'kaliadeh-palace',
              name: 'Kaliadeh Palace & Gardens',
              description: 'Historic palace with beautiful gardens on an island',
              history: 'Kaliadeh Palace is a historic palace located on an island in the Shipra River. Built during the Malwa Sultanate period and later renovated by the Mughals, the palace is known for its Persian architectural style. Emperor Akbar visited this palace and built a water pavilion here. The palace is surrounded by beautiful gardens and offers a peaceful retreat. The structure features intricate carvings and a central hall with a fountain.',
              image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800',
              latitude: 23.2156,
              longitude: 75.7885,
              address: 'Kaliadeh Palace, Ujjain, Madhya Pradesh 456010'
            }
          ]
        },
        {
          id: 'toilets',
          name: 'Public Facilities',
          icon: '🚻',
          places: [
            {
              id: 'kumbh-facilities',
              name: 'Kumbh Mela Facilities',
              description: 'World-class public facilities developed for Kumbh Mela',
              history: 'Ujjain has developed extensive public infrastructure, especially after hosting the Simhastha Kumbh Mela. The city now has modern public toilet facilities at all major temples, ghats, and tourist spots. These facilities are maintained by the Ujjain Municipal Corporation and are equipped with modern amenities. The infrastructure was significantly upgraded to handle the millions of pilgrims during the Kumbh Mela.',
              image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
              latitude: 23.1765,
              longitude: 75.7885,
              address: 'Available at major temples and ghats'
            }
          ]
        },
        {
          id: 'cafeteria',
          name: 'Cafeteria',
          icon: '☕',
          places: [
            {
              id: 'madhuram-sweets',
              name: 'Madhuram Sweets',
              description: 'Popular restaurant serving authentic Malwa cuisine',
              history: 'Madhuram Sweets is a well-established restaurant chain in Ujjain, known for serving authentic Malwa cuisine and traditional sweets. The restaurant has been serving locals and tourists for over 30 years. They are famous for their poha-jalebi breakfast, traditional thalis, and a wide variety of sweets. The restaurant maintains high standards of hygiene and quality, making it a favorite among pilgrims and tourists.',
              image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800',
              latitude: 23.1765,
              longitude: 75.7885,
              address: 'Freeganj, Ujjain, Madhya Pradesh 456010'
            }
          ]
        }
      ]
    },
    {
      id: 'khajuraho',
      name: 'Khajuraho',
      image: 'assets/images/khajuraho.png',
      description: 'UNESCO World Heritage Site famous for ancient temples with exquisite sculptures',
      categories: [
        {
          id: 'temples',
          name: 'Temples',
          icon: '🛕',
          places: [
            {
              id: 'kandariya-mahadev',
              name: 'Kandariya Mahadev Temple',
              description: 'Largest and most ornate temple in Khajuraho',
              history: 'Built around 1050 CE by King Vidyadhara of the Chandela dynasty, the Kandariya Mahadev Temple is the largest and most ornate temple in Khajuraho. Dedicated to Lord Shiva, the temple is a masterpiece of medieval Indian architecture. The temple stands on a high platform and rises to a height of 31 meters. It features over 900 sculptures depicting various aspects of life, including gods, goddesses, celestial beings, and erotic sculptures. The temple is a UNESCO World Heritage Site and represents the pinnacle of Chandela art and architecture.',
              image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800',
              latitude: 24.8518,
              longitude: 79.9199,
              address: 'Western Group of Temples, Khajuraho, Madhya Pradesh 471606'
            },
            {
              id: 'lakshmana-temple',
              name: 'Lakshmana Temple',
              description: 'Ancient temple with intricate carvings and sculptures',
              history: 'The Lakshmana Temple was built around 930-950 CE by King Yashovarman and is one of the earliest temples in Khajuraho. Dedicated to Lord Vishnu, the temple is known for its exquisite sculptures and intricate carvings. The temple stands on a high platform with a subsidiary shrine at each corner. The outer walls are adorned with three bands of sculptures depicting gods, goddesses, celestial beings, and scenes from daily life. An inscription in the temple provides valuable information about the Chandela dynasty.',
              image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800',
              latitude: 24.8520,
              longitude: 79.9195,
              address: 'Western Group of Temples, Khajuraho, Madhya Pradesh 471606'
            }
          ]
        },
        {
          id: 'scenery',
          name: 'Scenery',
          icon: '🌅',
          places: [
            {
              id: 'temple-complex',
              name: 'Temple Complex Gardens',
              description: 'Beautiful landscaped gardens surrounding the temple complex',
              history: 'The Archaeological Survey of India has developed beautiful landscaped gardens around the Khajuraho temple complex. These gardens provide a serene environment to appreciate the magnificent temples. The gardens are well-maintained with manicured lawns, flowering plants, and walking paths. The setting is particularly beautiful during sunrise and sunset when the golden light illuminates the ancient sandstone temples. The gardens also host the famous Khajuraho Dance Festival every year.',
              image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800',
              latitude: 24.8518,
              longitude: 79.9199,
              address: 'Khajuraho Temple Complex, Madhya Pradesh 471606'
            },
            {
              id: 'panna-national-park',
              name: 'Panna National Park',
              description: 'Tiger reserve with stunning natural beauty near Khajuraho',
              history: 'Panna National Park, located about 30 km from Khajuraho, is a tiger reserve and one of the most scenic wildlife destinations in India. Established in 1981, the park is home to tigers, leopards, deer, and numerous bird species. The park features the beautiful Pandav Falls and Ken River, which flows through the reserve creating stunning gorges. The park offers jeep safaris and is a perfect complement to the cultural experience of Khajuraho.',
              image: 'https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800',
              latitude: 24.7161,
              longitude: 80.0311,
              address: 'Panna National Park, Madhya Pradesh 488001'
            }
          ]
        },
        {
          id: 'gardens',
          name: 'Gardens',
          icon: '🌳',
          places: [
            {
              id: 'archaeological-gardens',
              name: 'Archaeological Museum Gardens',
              description: 'Peaceful gardens at the Khajuraho Archaeological Museum',
              history: 'The Khajuraho Archaeological Museum, established in 1910, is surrounded by peaceful gardens. The museum houses a rich collection of sculptures and artifacts from the Khajuraho temples. The gardens provide a tranquil space for visitors to relax and reflect on the artistic heritage of Khajuraho. The museum gardens feature ancient sculptures displayed in an open-air setting, creating a unique blend of nature and art.',
              image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?w=800',
              latitude: 24.8485,
              longitude: 79.9193,
              address: 'Khajuraho Archaeological Museum, Madhya Pradesh 471606'
            }
          ]
        },
        {
          id: 'toilets',
          name: 'Public Facilities',
          icon: '🚻',
          places: [
            {
              id: 'tourist-facilities',
              name: 'Tourist Complex Facilities',
              description: 'Modern facilities at the temple complex and tourist areas',
              history: 'As a major tourist destination and UNESCO World Heritage Site, Khajuraho has excellent public infrastructure. The Archaeological Survey of India and Madhya Pradesh Tourism have developed clean, modern toilet facilities at the temple complex and all major tourist spots. These facilities are well-maintained and equipped with modern amenities to serve both domestic and international tourists.',
              image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800',
              latitude: 24.8518,
              longitude: 79.9199,
              address: 'Available at temple complex and tourist areas'
            }
          ]
        },
        {
          id: 'cafeteria',
          name: 'Cafeteria',
          icon: '☕',
          places: [
            {
              id: 'raja-cafe',
              name: 'Raja Cafe',
              description: 'Popular rooftop restaurant with temple views',
              history: 'Raja Cafe is one of the most popular restaurants in Khajuraho, known for its rooftop seating with stunning views of the temple complex. Established in the 1990s, the cafe has become a favorite among travelers for its relaxed atmosphere, good food, and beautiful sunset views. The cafe serves a mix of Indian and international cuisine, including traditional Bundelkhandi dishes, Italian pasta, and continental breakfast.',
              image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
              latitude: 24.8485,
              longitude: 79.9193,
              address: 'Main Road, Khajuraho, Madhya Pradesh 471606'
            }
          ]
        }
      ]
    }
  ];

  constructor() { }

  getAllLocations(): Location[] {
    return this.locations;
  }

  getLocationById(id: string): Location | undefined {
    return this.locations.find(loc => loc.id === id);
  }

  getCategoryById(locationId: string, categoryId: string): Category | undefined {
    const location = this.getLocationById(locationId);
    return location?.categories.find(cat => cat.id === categoryId);
  }

  getPlaceById(locationId: string, categoryId: string, placeId: string): Place | undefined {
    const category = this.getCategoryById(locationId, categoryId);
    return category?.places.find(place => place.id === placeId);
  }

  navigateToPlace(latitude: number, longitude: number): void {
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, '_blank');
  }
}
