import { LatLngExpression } from 'leaflet';

export interface Places {
  name: string;
  description: string;
  portrait?: string;
  address?: string;
  events?: string;
  linkMaps?: string;
  storeCategory: string;
  upcoming?: any;
  profilePhoto?: string;
  onlineStore?: string;
  position: LatLngExpression;
}
