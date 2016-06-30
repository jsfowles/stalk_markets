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
            </div>
          </div>
        </div>
			);

		});

	

	}

	render() {
		return(
			<div className="row">
		
				{this.displayMarkets.bind(this)()}
			</div>
		);

	}


}

export default Markets







