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
				<div key={`vendor-${vendor.id}`} className='col s12'>
					<Link to={`/vendors/${vendor.id}`}>{vendor.business_name}</Link>
					<p>{vendor.contact_phone}</p>
				</div>
			);
		});
	}

	render() {	
		return(
			<div>
				<h1>Favorite Vendors</h1>
				<div className='row'>
					{this.displayFavorites.bind(this)()}
				</div>
			</div>
		)
	}
}

export default Favorites;
