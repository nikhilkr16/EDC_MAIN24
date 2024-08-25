import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const GoogleMapComponent = () => {
  const mapStyles = {        
    height: "400px",
    width: "50%"};
  
  // Default location (can be changed)
  const defaultCenter = {
    lat: 23.428492143753374, lng: 85.42268140971116
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAwT1kh1CnwEy2FTqzh9R2DiWJq1JvCz28">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMapComponent;
