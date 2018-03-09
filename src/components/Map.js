import React from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from 'react-google-maps';

const Map = withScriptjs(
  withGoogleMap(props => {
    const mapCenter = {
      lat: 41.287341,
      lng: -72.397819,
    };

    return (
      <GoogleMap
        defaultZoom={12}
        defaultCenter={mapCenter}
        options={{ gestureHandling: 'cooperative' }}>
        <Marker position={mapCenter} />
      </GoogleMap>
    );
  })
);

export default Map;
