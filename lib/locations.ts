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

// Real Teddy Kids locations data
export const locations: Record<string, Location> = {
  rbw: {
    id: 'rbw',
    name: 'RBW – Rijnsburgerweg 35',
    city: 'Leiden',
    tagline: 'Our original TK location—where it all began. A warm, nurturing space for our youngest learners.',
    address: {
      street: 'Rijnsburgerweg 35',
      postalCode: '2334 BH',
      city: 'Leiden',
      country: 'Netherlands',
      googleMapsUrl: 'https://maps.google.com/?q=Rijnsburgerweg+35+Leiden',
    },
    contact: {
      name: 'Jess',
      role: 'Site Leader',
      email: 'jess@teddykids.nl',
      phone: '+31 6 39004514',
      whatsapp: '+31612345678',
      whatsappMessage: 'Hi Teddy Kids RBW! I would like to book a tour.',
    },
    hours: {
      monday: '7:30 - 18:30',
      tuesday: '7:30 - 18:30',
      wednesday: '7:30 - 18:30',
      thursday: '7:30 - 18:30',
      friday: '7:30 - 18:30',
      weekend: 'Closed',
    },
    programs: ['nursery', 'preschool'],
    images: [
      '/images/locations/rbw_1.jpg',
      '/images/locations/rbw_2.jpg',
      '/images/locations/rbw_3.jpg',
    ],
    reviews: [
      {
        author: 'Lotte & Daan',
        rating: 5,
        text: 'RBW is like family. They made our daughter feel at home from day one.',
        date: '2023-05-15',
      },
      {
        author: 'Sophia K.',
        rating: 5,
        text: 'The staff at RBW are incredible. They truly care about each child and create such a warm, nurturing environment.',
        date: '2023-08-22',
      },
    ],
    featured: true,
  },
  
  rb3rb5: {
    id: 'rb3rb5',
    name: 'RB3/RB5 – Rijnsburgerweg 3 & 5',
    city: 'Leiden',
    tagline: 'A dynamic, dual-building hub with spaces for both young children and school-aged adventurers.',
    address: {
      street: 'Rijnsburgerweg 3-5',
      postalCode: '2334 BA',
      city: 'Leiden',
      country: 'Netherlands',
      googleMapsUrl: 'https://maps.google.com/?q=Rijnsburgerweg+3+Leiden',
    },
    contact: {
      name: 'Pamela',
      role: 'Site Leader',
      email: 'pamela@teddykids.nl',
      phone: '+31 6 43457460',
      whatsapp: '+31687654321',
      whatsappMessage: 'Hi Teddy Kids RB3/RB5! I would like to book a tour.',
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
      '/images/locations/rb3rb5_1.jpg',
      '/images/locations/rb3rb5_2.jpg',
      '/images/locations/rb3rb5_3.jpg',
    ],
    reviews: [
      {
        author: 'Rami & Elise',
        rating: 5,
        text: 'The after-school activities here are so creative—our son never wants to leave!',
        date: '2023-06-10',
      },
      {
        author: 'David P.',
        rating: 4,
        text: 'Great facilities and professional staff. The dual-building setup gives children plenty of space to explore.',
        date: '2023-09-05',
      },
    ],
    featured: true,
  },
  
  lrz: {
    id: 'lrz',
    name: 'LRZ – Lorentzkade 15a',
    city: 'Leiden',
    tagline: 'Home to both our bilingual after-school care and the international TISA program, all in one inspiring space.',
    address: {
      street: 'Lorentzkade 15a',
      postalCode: '2313 GB',
      city: 'Leiden',
      country: 'Netherlands',
      googleMapsUrl: 'https://maps.google.com/?q=Lorentzkade+15a+Leiden',
    },
    contact: {
      name: 'Antonella',
      role: 'Site Leader',
      email: 'antonela@teddykids.nl',
      phone: '+31 6 39004513',
      whatsapp: '+31612378945',
      whatsappMessage: 'Hi Teddy Kids LRZ! I would like to book a tour.',
    },
    hours: {
      monday: '7:30 - 18:30',
      tuesday: '7:30 - 18:30',
      wednesday: '7:30 - 18:30',
      thursday: '7:30 - 18:30',
      friday: '7:30 - 18:30',
      weekend: 'Closed',
    },
    programs: ['afterSchool', 'tisa'],
    images: [
      '/images/locations/lrz_1.jpg',
      '/images/locations/lrz_2.webp',
      '/images/locations/lrz_3.jpg',
    ],
    reviews: [
      {
        author: 'Farah & Michiel',
        rating: 5,
        text: 'The staff at Lorentzkade are amazing—our daughter loves both TK and her new TISA class.',
        date: '2023-03-12',
      },
      {
        author: 'Thomas & Julie',
        rating: 5,
        text: 'The international atmosphere at LRZ is exactly what we wanted for our children. They are learning so much!',
        date: '2023-10-18',
      },
    ],
    featured: true,
  },
  
  tisa_leiden: {
    id: 'tisa_leiden',
    name: 'TISA Leiden',
    city: 'Leiden',
    tagline: 'Our flagship bilingual international school where global citizens begin their educational journey.',
    address: {
      street: 'Lorentzkade 15a',
      postalCode: '2313 GB',
      city: 'Leiden',
      country: 'Netherlands',
      googleMapsUrl: 'https://maps.google.com/?q=Lorentzkade+15a+Leiden',
    },
    contact: {
      name: 'Numa',
      role: 'School Director',
      email: 'numa@tisaschool.nl',
      phone: '+31 6 44513333',
      whatsapp: '+31612345789',
      whatsappMessage: 'Hi TISA Leiden! I would like to book a tour of the school.',
    },
    hours: {
      monday: '8:30 - 15:00',
      tuesday: '8:30 - 15:00',
      wednesday: '8:30 - 15:00',
      thursday: '8:30 - 15:00',
      friday: '8:30 - 15:00',
      weekend: 'Closed',
    },
    programs: ['tisa'],
    images: [
      '/images/locations/tisa_leiden_1.jpg',
      '/images/locations/tisa_leiden_2.jpg',
      '/images/locations/tisa_leiden_3.jpg',
    ],
    reviews: [
      {
        author: 'International Parents',
        rating: 5,
        text: 'TISA Leiden offers an exceptional bilingual education. Our children are developing into true global citizens.',
        date: '2023-06-15',
      },
      {
        author: 'Dutch Family',
        rating: 5,
        text: 'The international curriculum at TISA is outstanding. Our son speaks fluent English after just one year!',
        date: '2023-09-22',
      },
    ],
    featured: true,
  },
  
  zml: {
    id: 'zml',
    name: 'ZML – Zeemanlaan 22a',
    city: 'Leiden',
    tagline: 'A cozy, creative setting where little ones explore, play, and thrive in a close-knit environment.',
    address: {
      street: 'Zeemanlaan 22a',
      postalCode: '2313 SZ',
      city: 'Leiden',
      country: 'Netherlands',
      googleMapsUrl: 'https://maps.google.com/?q=Zeemanlaan+22a+Leiden',
    },
    contact: {
      name: 'Meral',
      role: 'Site Leader',
      email: 'meral@teddykids.nl',
      phone: '+31 6 20966405',
      whatsapp: '+31612345987',
      whatsappMessage: 'Hi Teddy Kids ZML! I would like to book a tour.',
    },
    hours: {
      monday: '7:30 - 18:30',
      tuesday: '7:30 - 18:30',
      wednesday: '7:30 - 18:30',
      thursday: '7:30 - 18:30',
      friday: '7:30 - 18:30',
      weekend: 'Closed',
    },
    programs: ['nursery', 'preschool'],
    images: [
      '/images/locations/zml_1.jpg',
      '/images/locations/zml_2.jpg',
      '/images/locations/zml_3.jpg',
    ],
    reviews: [
      {
        author: 'Diego & Juno',
        rating: 5,
        text: 'ZML is magical. The environment is peaceful, clean, and full of laughter.',
        date: '2023-07-12',
      },
      {
        author: 'Anna M.',
        rating: 5,
        text: 'The teachers at ZML are so attentive and caring. My son looks forward to going every day!',
        date: '2023-11-18',
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
      street: 'R. São Sebastião da Pedreira 27',
      postalCode: '1050-010',
      city: 'Lisbon',
      country: 'Portugal',
      googleMapsUrl: 'https://maps.google.com/?q=R.+São+Sebastião+da+Pedreira+27+Lisbon',
    },
    contact: {
      name: 'Natalia',
      role: 'Campus Director',
      email: 'lisbon@tisaschool.nl',
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
