import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { Location } from '@/types/locations';

import L from 'leaflet';
import 'leaflet.markercluster';

type Props = {
  markers: Location[];
};
// const customIcon = new L.Icon({
//   iconUrl: '/icons/sneaker.svg',
//   iconSize: [40, 40],
//   iconAnchor: [20, 20],
//   popupAnchor: [0, -40],
// });

const CustomDivIcon = L.divIcon({
  html: `<div class="custom" > </div>`,
  className: 'custom-icon-wrapped',
  iconSize: L.point(40, 45, true),
});
const createCustomClusterIcon = (cluster: L.MarkerCluster) => {
  const count = cluster.getChildCount();

  return L.divIcon({
    html: `<div class="custom-cluster">${count}</div>`,
    className: 'custom-cluster-wrapper',
    iconSize: L.point(40, 40, true),
  });
};
const MarkerClusterWrapper = ({ markers }: Props) => {
  const map = useMap();
  useEffect(() => {
    const markerCluster = L.markerClusterGroup({
      iconCreateFunction: createCustomClusterIcon,
    });
    markers.forEach(({ position, name, description }) => {
      const marker = L.marker(position, { icon: CustomDivIcon });
      marker.on('click', () => {
        map.setView(position, 18);
        map.flyTo(position, 18);
      });
      if (name)
        marker.bindPopup(`<strong>${name}</strong>
              <br />
              ${description}`);

      markerCluster.addLayer(marker);
      //   markerCluster.addLayer(marker2);
    });

    markerCluster.on('clusterclick', (event: any) => {
      const cluster = event.layer;
      const childMarkers = cluster.getAllChildMarkers();
      console.log(`Cluster con ${childMarkers.length} elementos`);
      // Hacer zoom para mostrar todos los markers del cluster
      map.fitBounds(cluster.getBounds());
    });

    map.addLayer(markerCluster);

    return () => {
      map.removeLayer(markerCluster);
    };
  }, [map, markers]);
  return null;
};

export default MarkerClusterWrapper;
