import { Places } from '@/types/places';
import L from 'leaflet';

//if U want to use the Icon svg or png

// const customIcon = new L.Icon({
//   iconUrl: '/icons/sneaker.svg',
//   iconSize: [40, 40],
//   iconAnchor: [20, 20],
//   popupAnchor: [0, -40],
// });

type TypeStore = Pick<Places, 'storeCategory'>;

export const CustomDivIcon = ({ storeCategory }: TypeStore): L.DivIcon => {
  const icon: L.DivIcon = L.divIcon({
    html: `<div class=" markersPoint ${storeCategory}" > </div>`,
    className: 'custom-icon-wrp',
    iconSize: L.point(40, 45, true),
  });
  return icon;
};

export const createCustomClusterIcon = (cluster: L.MarkerCluster) => {
  const count = cluster.getChildCount();

  return L.divIcon({
    html: `<div class="custom-cluster">${count}</div>`,
    className: 'custom-cluster-wrapper',
    iconSize: L.point(40, 40, true),
  });
};
