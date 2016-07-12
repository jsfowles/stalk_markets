import React from 'react';
import { Link } from 'react-router';
import SimpleMap from './SimpleMap';

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
ASDFASDF
	render() {
		return(
			<div className='row market'>
				<div className='col s12 m6 offset-m4 market-margin'>
					<p className='market-text market-image valign-wrapper'>{this.state.market.name}</p>
				</div>
				<div className='col s12 m6 offset-m4 market-margin'>
					<SimpleMap market={this.state.market}/>
				</div>
				<div className="col s12 m6 offset-m4 market-margin">
					<div className="white-text">
						<p>{this.state.market.address}</p>
						<p>{this.state.market.city + ", " + this.state.market.state + " " + this.state.market.zip}</p>
					</div>
				</div>
			</div>
		)
	}
}


export default Market;
