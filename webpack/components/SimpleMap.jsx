import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class SimpleMap extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let market = this.props.market;
    let markers = [];
    if(market.latitude && market.longitude) {
      console.log(market.latitude);
      console.log(market.longitude);
      markers =  [{
        position: {
          lat: market.latitude,
          lng: market.longitude,
        },
        key: `market-${market.id}`,
        defaultAnimation: 2,
      }]
    }
    return (
      <GoogleMapLoader
          containerElement={
            <div
              {...this.props}
              style={{
                height: '300px',
                width: '500px',
              }}
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => (this._googleMapComponent = map)}
              defaultZoom={3}
              defaultCenter={{ lat: 40.760779, lng: -111.891047 }}
            >
            {markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                />
              );
            })}
            </GoogleMap>
          }
        />
      );
  }
}

export default SimpleMap;
