import React from 'react';
import { Link } from 'react-router';

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
			this.setState({ market: market });
		}).fail(data => {
			console.log('fail' + data);
			//TODO Handle it better
		});
	}

	render() {
		return(
			<div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{this.state.market.name}</span>

            <div>
              <label>Address:</label>
              <p>{this.state.market.address}</p>
              <p>{`${this.state.market.city}, ${this.state.market.state} ${this.state.market.zip}`}</p>

              <label>Description:</label>
              <p></p>

              <label>Alcohol Content:</label>
              <p></p>
            </div>
          </div>
        </div>
      </div>
		)
	}
}


export default Market;