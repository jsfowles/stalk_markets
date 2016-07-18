import React from 'react';
import { Link } from 'react-router';
import SimpleMap from './SimpleMap';
import MarketVendor from './MarketVendor'

class Market extends React.Component {
	constructor(props) {
		super(props);
		this.state = { market: {} };
	}

	componentWillMount() {
		$.ajax({
			url: `/api/markets/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( market => {

			this.setState({ market });

		}).fail(data => {
			console.log('fail' + data);
			//TODO Handle it better
		});
	}

	setMarketVendor() {
		console.log('setmarket')
		if (this.state.market.id) {
			return (
				<div>
					<MarketVendor market={this.state.market}/>
				</div>
			)
		}
	}

	render() {
		return(
			<div className='row market'>
				<div className='col s12 m4 offset-m4 market-margin'>
				  <div className="center">
					  <p className='market-text market-image valign-wrapper'>{this.state.market.name}</p>
					</div>
				</div>
				<div className='col s12 m6 offset-m4 market-margin'>
					<SimpleMap market={this.state.market}/>
				</div>
				<div className="col s12 m6 offset-m4 market-margin">
					<div className="white-text">
						<div className='row col s12 m12 l12'>
							<div className='col s12 m4 offest-m3'>
								<p>Address:</p>
								<p>{this.state.market.address}</p>
								<p>{this.state.market.city + ", " + this.state.market.state + " " + this.state.market.zip}</p>
							</div>
							<div className='col s12 m1 offest-m3'>
								<p>{"Season Open: " + this.state.market.start_date + "  -  " + this.state.market.end_date}</p>
								<p>{"Hours: " + this.state.market.start_time + "  -  " + this.state.market.end_time}</p>
								<p>{"Days Open: " + this.state.market.day_of_week}</p>
							</div>
							<div className='container'>
								<p>{"Contact Phone: " + this.state.market.contact_phone}</p>
								<p>{"Pet Friendly: " + this.state.market.pet_friendly}</p>
								<p>{"Crafts: " + this.state.market.crafts}</p>
								<p>{"Alcohol Served: " + this.state.market.alcohol}</p>
								<p>{"Prepared Foods: " + this.state.market.prepared_food}</p>
								{this.setMarketVendor()}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default Market;
