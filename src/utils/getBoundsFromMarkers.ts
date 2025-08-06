import L from 'leaflet';

export const getBoundsFromMarkers = (positions: L.LatLngExpression[]) => {
  return L.latLngBounds(positions);
};
