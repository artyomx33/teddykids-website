import { StaticImageData } from 'next/image';

export interface LocationContact {
  name: string;
  role: string;
  email: string;
  phone: string;
  whatsapp: string;
  whatsappMessage: string;
}

export interface LocationHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  weekend: string;
}

export interface LocationReview {
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface Location {
  id: string;
  name: string;
  city: string;
  tagline: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
    googleMapsUrl: string;
  };
  contact: LocationContact;
  hours: LocationHours;
  programs: string[];
  images: string[];
  reviews: LocationReview[];
  featured: boolean;
}

// Placeholder data - to be replaced with real data
export const locations: Record<string, Location> = {
  leiden_central: {
    id: 'leiden_central',
    name: 'Leiden Central',
    city: 'Leiden',
    tagline: 'Our flagship location in the heart of Leiden',
    address: {
      street: 'Stationsweg 1',
      postalCode: '2312 AV',
      city: 'Leiden',
      country: 'Netherlands',
      googleMapsUrl: 'https://maps.google.com/?q=Stationsweg+1+Leiden',
    },
    contact: {
      name: 'Antonela',
      role: 'Site Leader',
      email: 'antonela@teddykids.nl',
      phone: '+31 71 123 4567',
      whatsapp: '+31612345678',
      whatsappMessage: 'Hi Teddy Kids Leiden Central! I would like to book a tour.',
    },
    hours: {
      monday: '7:30 - 18:30',
      tuesday: '7:30 - 18:30',
      wednesday: '7:30 - 18:30',
      thursday: '7:30 - 18:30',
      friday: '7:30 - 18:30',
      weekend: 'Closed',
    },
    programs: ['nursery', 'preschool', 'afterSchool'],
    images: [
      '/images/locations/leiden_central_1.jpg',
      '/images/locations/leiden_central_2.jpg',
      '/images/locations/leiden_central_3.jpg',
    ],
    reviews: [
      {
        author: 'Emma & James',
        rating: 5,
        text: 'Our daughter has been attending TK Leiden Central for 2 years and we couldn\'t be happier. The bilingual environment has been amazing for her development.',
        date: '2023-05-15',
      },
      {
        author: 'Sophia K.',
        rating: 5,
        text: 'The staff at Leiden Central are incredible. They truly care about each child and create such a warm, nurturing environment.',
        date: '2023-08-22',
      },
    ],
    featured: true,
  },
  
  oegstgeest: {
    id: 'oegstgeest',
    name: 'Oegstgeest',
    city: 'Oegstgeest',
    tagline: 'Spacious location with large outdoor area',
    address: {
      street: 'Rhijngeesterstraatweg 50',
      postalCode: '2341 BV',
      city: 'Oegstgeest',
      country: 'Netherlands',
      googleMapsUrl: 'https://maps.google.com/?q=Rhijngeesterstraatweg+50+Oegstgeest',
    },
    contact: {
      name: 'Tess',
      role: 'Site Leader',
      email: 'tess@teddykids.nl',
      phone: '+31 71 234 5678',
      whatsapp: '+31687654321',
      whatsappMessage: 'Hi Teddy Kids Oegstgeest! I would like to book a tour.',
    },
    hours: {
      monday: '7:30 - 18:30',
      tuesday: '7:30 - 18:30',
      wednesday: '7:30 - 18:30',
      thursday: '7:30 - 18:30',
      friday: '7:30 - 18:30',
      weekend: 'Closed',
    },
    programs: ['nursery', 'preschool', 'tisa'],
    images: [
      '/images/locations/oegstgeest_1.jpg',
      '/images/locations/oegstgeest_2.jpg',
      '/images/locations/oegstgeest_3.jpg',
    ],
    reviews: [
      {
        author: 'Miguel & Ling',
        rating: 5,
        text: 'TISA at Oegstgeest has been transformational for our children. The international curriculum and caring teachers make this place special.',
        date: '2023-06-10',
      },
      {
        author: 'David P.',
        rating: 4,
        text: 'Great facilities and professional staff. The outdoor space is amazing for the children to explore and play.',
        date: '2023-09-05',
      },
    ],
    featured: true,
  },
  
  leiden_south: {
    id: 'leiden_south',
    name: 'Leiden South',
    city: 'Leiden',
    tagline: 'Cozy location in residential Leiden',
    address: {
      street: 'Zoeterwoudseweg 25',
      postalCode: '2321 GP',
      city: 'Leiden',
      country: 'Netherlands',
      googleMapsUrl: 'https://maps.google.com/?q=Zoeterwoudseweg+25+Leiden',
    },
    contact: {
      name: 'Jess',
      role: 'Site Leader',
      email: 'jess@teddykids.nl',
      phone: '+31 71 345 6789',
      whatsapp: '+31612378945',
      whatsappMessage: 'Hi Teddy Kids Leiden South! I would like to book a tour.',
    },
    hours: {
      monday: '7:30 - 18:00',
      tuesday: '7:30 - 18:00',
      wednesday: '7:30 - 18:00',
      thursday: '7:30 - 18:00',
      friday: '7:30 - 18:00',
      weekend: 'Closed',
    },
    programs: ['nursery', 'preschool', 'afterSchool'],
    images: [
      '/images/locations/leiden_south_1.jpg',
      '/images/locations/leiden_south_2.jpg',
      '/images/locations/leiden_south_3.jpg',
    ],
    reviews: [
      {
        author: 'Anna M.',
        rating: 5,
        text: 'The teachers at Leiden South are so attentive and caring. My son looks forward to going every day!',
        date: '2023-07-12',
      },
      {
        author: 'Thomas & Julie',
        rating: 5,
        text: 'We love the family atmosphere at this location. It feels like a second home for our twins.',
        date: '2023-10-18',
      },
    ],
    featured: false,
  },
  
  tisa_portugal: {
    id: 'tisa_portugal',
    name: 'TISA Portugal',
    city: 'Lisbon',
    tagline: 'Our international campus in sunny Portugal',
    address: {
      street: 'Avenida da Liberdade 120',
      postalCode: '1250-145',
      city: 'Lisbon',
      country: 'Portugal',
      googleMapsUrl: 'https://maps.google.com/?q=Avenida+da+Liberdade+120+Lisbon',
    },
    contact: {
      name: 'Sofia',
      role: 'Campus Director',
      email: 'sofia@teddykids.nl',
      phone: '+351 21 123 4567',
      whatsapp: '+351912345678',
      whatsappMessage: 'Hi TISA Portugal! I would like to book a tour.',
    },
    hours: {
      monday: '8:00 - 18:00',
      tuesday: '8:00 - 18:00',
      wednesday: '8:00 - 18:00',
      thursday: '8:00 - 18:00',
      friday: '8:00 - 18:00',
      weekend: 'Closed',
    },
    programs: ['tisa'],
    images: [
      '/images/locations/tisa_portugal_1.jpg',
      '/images/locations/tisa_portugal_2.jpg',
      '/images/locations/tisa_portugal_3.jpg',
    ],
    reviews: [
      {
        author: 'International Family',
        rating: 5,
        text: 'Moving to Portugal was made so much easier knowing our children had a familiar educational environment at TISA.',
        date: '2023-04-20',
      },
      {
        author: 'Expat Parents',
        rating: 5,
        text: 'The bilingual program at TISA Portugal is exceptional. Our children are thriving in both English and Portuguese.',
        date: '2023-08-15',
      },
    ],
    featured: true,
  }
};

export const getLocationById = (id: string): Location | undefined => {
  return locations[id];
};

export const getAllLocations = (): Location[] => {
  return Object.values(locations);
};

export const getFeaturedLocations = (): Location[] => {
  return Object.values(locations).filter(location => location.featured);
};

export const getLocationsByProgram = (programId: string): Location[] => {
  return Object.values(locations).filter(location => 
    location.programs.includes(programId)
  );
};

export const getLocationsByCity = (city: string): Location[] => {
  return Object.values(locations).filter(location => 
    location.city.toLowerCase() === city.toLowerCase()
  );
};
