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
						<p>{this.state.market.address}</p>
						<p>{this.state.market.city + ", " + this.state.market.state + " " + this.state.market.zip}</p>
						<p>{this.state.market.contact_phone}</p>
						<p>{this.state.market.pet_friendly}</p>
						<p>{this.state.market.crafts}</p>
						<p>{this.state.market.alcohol}</p>
						<p>{this.state.market.prepared_food}</p>
					</div>
				</div>
				<MarketVendor market={this.state.market}/>
			</div>
		)
	}
}


export default Market;
