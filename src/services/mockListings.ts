import { Listing } from '../types/Listing';

export const mockListings: Listing[] = [
  { id: '1', title: 'Appartement S+2 moderne', price: 280000, city: 'Tunis', type: 'Vente', rooms: 3, surface: 95, image: 'https://picsum.photos/seed/immo1/600/400' },
  { id: '2', title: 'Villa avec jardin', price: 750000, city: 'La Marsa', type: 'Vente', rooms: 6, surface: 280, image: 'https://picsum.photos/seed/immo2/600/400' },
  { id: '3', title: 'Studio meublé centre-ville', price: 900, city: 'Sousse', type: 'Location', rooms: 1, surface: 35, image: 'https://picsum.photos/seed/immo3/600/400' },
  { id: '4', title: 'Appartement S+3 vue mer', price: 1800, city: 'Hammamet', type: 'Location', rooms: 4, surface: 120, image: 'https://picsum.photos/seed/immo4/600/400' },
];