import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { Places } from '@/types/places';

import L from 'leaflet';
import 'leaflet.markercluster';

type Props = {
  markers: Places[];
};
// use the pick
type TypeStore = Pick<Places, 'type'>;

//if U want to use the Icon svg or png

// const customIcon = new L.Icon({
//   iconUrl: '/icons/sneaker.svg',
//   iconSize: [40, 40],
//   iconAnchor: [20, 20],
//   popupAnchor: [0, -40],
// });

const CustomDivIcon = ({ type }: TypeStore): L.DivIcon => {
  const icon: L.DivIcon = L.divIcon({
    html: `<div class=" markersPoint ${type}" > </div>`,
    className: 'custom-icon-wrp',
    iconSize: L.point(40, 45, true),
  });
  return icon;
};

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
    markers.forEach(({ position, name, description, type }) => {
      const marker = L.marker(position, { icon: CustomDivIcon({ type }) });
      marker.on('click', () => {
        if (map.getZoom() >= 15) return;
        map.setView(position, 15);
        map.flyTo(position, 15);
      });
      if (name)
        marker.bindPopup(`<strong>${name}</strong>
              <br />
              ${description}`);

      markerCluster.addLayer(marker);
    });

    markerCluster.on('clusterclick', (event: any) => {
      const cluster = event.layer;
      const childMarkers = cluster.getAllChildMarkers();
      console.log(`Cluster con ${childMarkers.length} elementos`);
      // Hacer zoom para mostrar todos los markers del cluster
      console.log(cluster.getBounds());
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
