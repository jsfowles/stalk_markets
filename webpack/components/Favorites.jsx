import React from 'react';
import { Link } from 'react-router'

class Favorites extends React.Component {
	constructor(props) {
		super(props);
		this.state = { favorites: [], vendors: [] };
	}

	componentWillMount() {
		$.ajax({
			url: "/api/vendors/favorites",
			type: "GET",
			dataType: "JSON"
		}).done( vendors => {
			this.setState({ vendors });
			console.log(vendors);
		}).fail( data => {
			console.log(data);
		})
	}

	displayFavorites() {
		return this.state.vendors.map( vendor => {
			return(
				<div key={`vendor-${vendor.id}`} className="row">
				  <div className="col s12 m8 offset-m2 l6 offset-l3 markets-name-div">
				    <span><Link to={`/vendors/${vendor.id}`} className="vendors-link">{vendor.business_name}</Link></span>
				    <span className='white-text distance'>{vendor.contact_phone}</span>
				  </div>
				</div>
			);
		});
	}


	render() {
		return(
			<div>
			  <div className='row'>
					<p className="about-title center">YOUR FAVORITES</p>
			    <div className="col s12 m8 offset-m2 l6 offset-l3 markets-name-div top-margin">
			      <span className='markets-link'>VENDORS</span>
			      <span className='white-text distance'>PHONE</span>
			    </div>
			  </div>
			  <div className='col s4 m4 l4 box-shadow'>
			    {this.displayFavorites.bind(this)()}
			  </div>
			</div>
		)
	}
}

export default Favorites;
