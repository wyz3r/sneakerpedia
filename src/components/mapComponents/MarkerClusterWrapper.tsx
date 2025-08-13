import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { Places } from '@/types/places';

import L from 'leaflet';
import 'leaflet.markercluster';
import { createCustomClusterIcon, CustomDivIcon } from './IconComponent';
import PopupComponent from './PopupComponent';

import { renderToHTML } from '@/utils/renderToHTML';

type Props = {
  markers: Places[];
};

const MarkerClusterWrapper = ({ markers }: Props) => {
  const map = useMap();
  useEffect(() => {
    const markerCluster = L.markerClusterGroup({
      iconCreateFunction: createCustomClusterIcon,
    });
    markers.forEach((store) => {
      const { position, name, storeCategory } = store;
      const marker = L.marker(position, { icon: CustomDivIcon({ storeCategory }) });
      marker.on('click', () => {
        if (map.getZoom() >= 15) return;
        map.setView(position, 15);
        map.flyTo(position, 15);
      });
      if (name) {
        const popupHTML = renderToHTML(<PopupComponent {...store} />);

        marker.bindPopup(popupHTML);
      }
      // marker.bindPopup(`<strong>${name}</strong>
      //       <br />
      //       <strong>${description}</strong>`);}

      markerCluster.addLayer(marker);
    });

    markerCluster.on('clusterclick', (event: any) => {
      const cluster = event.layer;
      const childMarkers = cluster.getAllChildMarkers();
      console.log(`Cluster con ${childMarkers.length} elementos`);

      // Hacer zoom para mostrar todos los markers del cluster
      // console.log(cluster.getBounds());
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
