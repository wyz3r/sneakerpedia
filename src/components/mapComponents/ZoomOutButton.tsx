'use client';
import { useMap } from 'react-leaflet';
import { getBoundsFromMarkers } from '@utils/getBoundsFromMarkers';
import { useEffect, useState } from 'react';
import { Places } from '@/types/places';

type LatLngType = Pick<Places, 'position'>;

type Props = {
  positions: LatLngType[];
};

const ZoomOutButton = ({ positions }: Props) => {
  const map = useMap();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (positions.length > 0) {
      setVisible(true);
    }
  }, [positions]);

  const handleZoomOut = () => {
    if (!map || positions.length === 0) return;

    const bounds = getBoundsFromMarkers(positions.map((p) => p.position));
    map.fitBounds(bounds, { padding: [50, 50] });
  };

  if (!visible) return null;
  console.log('rendered the button');
  return (
    <button
      className="absolute top-4 right-4 z-[9999] py-2 px-4 bg-white border border-gray-300 rounded-lg 	cursor-pointer"
      onClick={handleZoomOut}
      // style={{
      //   position: 'absolute',
      //   top: '1rem',
      //   right: '1rem',
      //   zIndex: 9999,
      //   padding: '0.5rem 1rem',
      //   background: '#fff',
      //   border: '1px solid #ccc',
      //   borderRadius: '8px',
      //   cursor: 'pointer',
      // }}
    >
      🔍 Ver todos
    </button>
  );
};

export default ZoomOutButton;
