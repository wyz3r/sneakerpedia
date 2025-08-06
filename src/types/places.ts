import { LatLngExpression } from 'leaflet';

export interface Places {
  name: string;
  description: string;
  portrait?: string;
  address?: string;
  events?: string;
  type?: string;
  upcoming?: any;
  onlineStore?: string;
  position: LatLngExpression;
}
