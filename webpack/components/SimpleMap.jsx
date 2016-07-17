import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

class SimpleMap extends React.Component{
  constructor(props) {
    super(props);
    this.renderMap = this.renderMap.bind(this);
  }


  renderMap() {
    let market = this.props.market;
    let markers = [];
    if(market.latitude && market.longitude) {
      markers =  [{
        position: {
          lat: market.latitude,
          lng: market.longitude,
        },
        key: `market-${market.id}`,
        defaultAnimation: 2
      }]

    let lat = market.latitude || 40.760779;
    let lng = market.longitude || -111.891047;
    return (
      <GoogleMapLoader
          containerElement={
            <div
              {...this.props}
              className='google-map'
            />
          }
          googleMapElement={
            <GoogleMap
              ref={(map) => (this._googleMapComponent = map)}
              defaultZoom={15}
              defaultCenter={{ lat, lng }}
              scrollwheel={false}
              draggable={false}
              scaleControl={false}
              navigationControl={false}
              mapTypeControl={false}
              zoomControl={false}
              disableDoubleClickZoom={true}
            >

            {markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                />
              );
            })}
            }
            </GoogleMap>
          }
        />
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderMap()}
      </div>
    )
  }
}

export default SimpleMap;
