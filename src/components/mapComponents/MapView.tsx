'use client';

// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { MapContainer, TileLayer, useMapEvent } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import '../../app/styles/maps.css';
import L from 'leaflet';
// import { useEffect, useState } from 'react';
import { useEffect } from 'react';

import MarkerClusterWrapper from './MarkerClusterWrapper';
import { Places } from '@/types/places';
import storeLocation from '../../data/stores.json';
import ZoomOutButton from './ZoomOutButton';

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// function MapZoomToMarker({ position }: { position: L.LatLngExpression }) {
//   const map = useMap();

//   // Cada vez que cambie la prop `position`, se hace zoom
//   if (position) {
//     map.setView(position, map.getZoom()); // puedes ajustar el nivel de zoom
//     // map.flyTo(position, map.getZoom());
//     // map.setZoom(30);
//   }

//   return null;
// }

const locations: Places[] = storeLocation as Places[];

const MapClickHandler = () => {
  useMapEvent('click', (e) => {
    const { lat, lng } = e.latlng;
    console.log('Clic en:', lat, lng);
    // Puedes guardar esto en un estado global, context o props callback
  });

  return null; // Este componente no renderiza nada visual
};

const MapView = () => {
  useEffect(() => {}, []);
  return (
    <div className="h-[850px] w-full">
      <MapContainer
        className="h-full w-full"
        center={[20.1178, -99.05273]}
        zoom={6}
        maxZoom={18}
        scrollWheelZoom={true}
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomOutButton positions={locations} />

        {/* <TileLayer
          attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/stamen_toner/{z}/{x}/{y}{r}.png"
        /> */}

        <MapClickHandler />
        <MarkerClusterWrapper markers={locations} />

        {/* {locations.map((loc, idx) => (
          <Marker
            key={idx}
            icon={customIcon}
            position={loc.position}
            eventHandlers={{
              click: () => {
                handlerInfoMarket(loc);
              },
            }}
          >
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.description}
            </Popup>
          </Marker>
        ))}
        {selectedMarker && <MapZoomToMarker position={selectedMarker.position} />} */}
      </MapContainer>
    </div>
  );
};

export default MapView;
