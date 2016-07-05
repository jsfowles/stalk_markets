import React from 'react';
import { Link } from 'react-router';

class Markets extends React.Component {
	constructor(props) {
		super(props);
		this.showPosition = this.showPosition.bind(this);
		this.userLoc = this.userLoc.bind(this);
		this.computeDistance = this.computeDistance.bind(this);
		this.state = { markets: [], latitude: 0.00, longitude: 0.00 };
	}

	componentWillMount() {
		this.userLoc();
	    $.ajax({
	    	url: '/api/markets',
	    	type: 'GET',
	    	dataType: 'JSON'
	    }).done(markets => {
	    	this.setState({ markets });
	    }).fail(data => {
	    	// TODO : handle fail
	    	console.log(data);
	    });
	}

	// calcDistance(location) {
	// 	<% market.calc_distance([this.state.latitude, this.state.longitude],location) %> 
	// }

	
	userLoc() {
		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(this.showPosition);
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}

showPosition(position) {
	  console.log("latitude");
		console.log(position.coords.latitude);
		console.log("longitude");
		console.log(position.coords.longitude);

  
    this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});


}


computeDistance(lat, lng) {

		console.log("market latitude");
		console.log(lat);
		console.log("market longitude");
		console.log(lng);
		console.log("state latitude");
		console.log(this.state.latitude);
		console.log("state longitude");
		console.log(this.state.longitude);

    let startLatRads = this.degreesToRadians(this.state.latitude);
    let startLongRads = this.degreesToRadians(this.state.longitude);
    let destLatRads = this.degreesToRadians(lat);
    let destLongRads = this.degreesToRadians(lng);
    let Radius = 6371; 
    let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
    Math.cos(startLatRads) * Math.cos(destLatRads) *
    Math.cos(startLongRads - destLongRads)) * Radius;
    console.log("distance");
    console.log(distance);
    return distance;
	}

	degreesToRadians(degrees) {
    let radians = (degrees * Math.PI)/180;
    return radians;
	}


displayMarkets() {

		return this.state.markets.map( market => {
			return(

				 <div key={`market-${market.id}`} className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{market.name}</span>
              <p>{market.address}</p>
              <p>{`${market.city}, ${market.state} ${market.zip}`}</p>
            </div>
            <div className="card-action">
              <Link to={`/markets/${market.id}`} >Show</Link>
              <button>{this.computeDistance(market.latitude, market.longitude)}</button>
            </div>
          </div>
        </div>
			);

		});

	}

	render() {
		// this.userLoc();
		return(
			<div className="row">
				
				{this.displayMarkets.bind(this)()}
			</div>
		);

	}


}

export default Markets







