import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

class SimpleMap extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    markers: [{
      position: {
        lat: 40.760779,
        lng: -111.891047,
      },
      key: `Utah`,
      defaultAnimation: 2,
      }],
    }
  }

  render() {
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
              ref={(map) => (this._googleMapComponent = map) && console.log(map.getZoom())}
              defaultZoom={3}
              defaultCenter={{ lat: 40.760779, lng: -111.891047 }}
            >
            {this.state.markers.map((marker, index) => {
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