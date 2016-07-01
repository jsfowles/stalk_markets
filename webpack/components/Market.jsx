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
			debugger;
			this.setState({ market });
		}).fail(data => {
			console.log('fail' + data);
			//TODO Handle it better
		});
	}

	showMarket() {
		return(
      <div className="col s12">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{this.state.market.name}</span>

            <div>
              <label>Address:</label>
              <p>{this.state.market.address}</p>
              
            </div>
          </div>
        </div>
      </div>
		)
	}

	render() {
		return(
			<div>
				{this.showMarket.bind(this)()}
			</div>
		)
	}
}


export default Market;
