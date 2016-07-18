import React from 'react';
import { Link } from 'react-router';
import AddVendorMarket from './AddVendorMarket';


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

	userLoc() {
		if (navigator.geolocation) {
			navigator.geolocation.watchPosition(this.showPosition);
		} else {
			alert("Geolocation is not supported by this browser.");
		}
	}

	showPosition(position) {

		this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
	}


	computeDistance(lat, lng) {

		let startLatRads = this.degreesToRadians(this.state.latitude);
		let startLongRads = this.degreesToRadians(this.state.longitude);
		let destLatRads = this.degreesToRadians(lat);
		let destLongRads = this.degreesToRadians(lng);
		let Radius = 6371;
		let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
		Math.cos(startLatRads) * Math.cos(destLatRads) *
		Math.cos(startLongRads - destLongRads)) * Radius;
		let location = (distance * 0.621371).toFixed(2);
		return location;
	}

	degreesToRadians(degrees) {
		let radians = (degrees * Math.PI)/180;
		return radians;
	}

	displayMarkets() {
		let all_market = [];
		let unordered_markets = this.state.markets.map( market => {
			return ( {id: market.id, name: market.name, distance: this.computeDistance(market.latitude, market.longitude)})
		});
    let ordered_markets = unordered_markets.sort( (a, b) => {
    	return (a.distance - b.distance)
    })

		let markets = ordered_markets.map( market => {
			all_market.push(
					<div key={`market-${market.id}`} className='row'>
						<div className='col s12 m8 offset-m2 l6 offset-l3 markets-name-div'>
							<span><Link to={`/markets/${market.id}`} className='markets-link'>{market.name}</Link></span>
							<span className='white-text distance'>{market.distance} mi</span>
						</div>
					</div>
			);
		});
		console.log(all_market);
		return (all_market)
	}

	render() {
		return(
			<div>
				<div className='row'>
          <div className="col s12 m8 offset-m2 l6 offset-l3 markets-name-div top-margin markets-row-float">
            <span className='markets-link'>MARKETS</span>
            <span className='white-text distance'>DISTANCE</span>
          </div>
        </div>
				<div className='col s12 m8 offset-m2 l6 offset-l3 markets-name-div '>
					{this.displayMarkets.bind(this)()}

				</div>
			</div>
		);

	}


}

export default Markets
