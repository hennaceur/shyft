import React from 'react'
import './css/Maps.css';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

class Maps extends React.Component{
render() {
    return (
      <Map
        google={this.props.google}
        zoom={11}
        className='mapStyles'
        initialCenter={{ lat: 40.7128, lng: -74.0060 }}
      >
     </Map>
    );
}
}
export default GoogleApiWrapper({
apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(Maps);


