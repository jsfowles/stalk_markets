import React from 'react';
import { Link } from 'react-router';

class Markets extends React.Component {
	constructor(props) {
		super(props);
		this.state = { markets: [] };
	}

	componentWillMount() {
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

	displayMarkets() {

		let markets = this.state.markets.map( market => {
			return({
				 <div key={`market-${market.id}`} class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{market.name}</span>
              <p>{market.address}</p>
              <p>{market.state}</p>
              <p>{market.city}</p>
              <p>{market.zip}</p>
            </div>
            <div class="card-action">
              <a href="#">Show</a>
            </div>
          </div>
        </div>
			})

		})

		return ({markets})

	}

	render() {
		return({ 
			<div className="row">
				{this.displayMarkets.bind(this)()}
			</div>
		})

	}


}

export default Markets