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

	render() {
		return(
			<div className='row center market'>
				<div className="col s12 ">
					<div className="white-text">
						<p>{this.state.market.name}</p>
						<p>{this.state.market.address}</p>
						<p>{this.state.market.city + ", " + this.state.market.state + " " + this.state.market.zip}</p>
					</div>
				</div>
			</div>
		)
	}
}


export default Market;
