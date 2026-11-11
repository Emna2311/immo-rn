export type Listing = {
  id: string;
  title: string;
  price: number;
  city: string;
  type: 'Vente' | 'Location';
  rooms: number;
  surface: number;
  image: string;
};