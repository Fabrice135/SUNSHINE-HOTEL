import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapComponentProps {
  accessToken?: string;
  center?: [number, number];
  zoom?: number;
  className?: string;
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  accessToken = 'pk.eyJ1IjoibG92YWJsZSIsImEiOiJjbGFkMzBpbGwwMXNkM29vMGNtbHI1c2htIn0.zvCY_65zEhIJPEMRJAR_Yg',
  center = [30.34734799459045, -2.842940181502511], 
  zoom = 15,
  className = "w-full h-full"
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    mapboxgl.accessToken = accessToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: center,
      zoom: zoom,
    });

    // Add marker
    new mapboxgl.Marker({
      color: '#FF6B35'
    })
      .setLngLat(center)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML('<div class="p-2"><h3 class="font-bold">Sunshine Hotel</h3><p class="text-sm">123 Sunshine Blvd, Muyinga</p></div>')
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [accessToken, center, zoom]);

  return <div ref={mapContainer} className={className} />;
};

export default MapComponent;