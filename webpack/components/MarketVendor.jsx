import React from 'react';

class MarketVendor extends React.Component {
	constructor(props){
		super(props);
		this.state = { vendors: [] };
	}


	componentDidMount() {
	  console.log("MarketVendor.jsx")
		console.log(this.props.market)
	    $.ajax({
	      url: `/api/markets/${this.props.market.id}/profile`,
	      type: 'GET',
	      dataType: 'JSON'
	    }).done( vendors => {
	    	console.log(vendors)
	      this.setState({ vendors });
	    }).fail( data => {
	      console.log(data);
	    });
	  
  }

  render() {
  	let allVendor;
  	if (this.state.vendors.length) {
			allVendor = this.state.vendors.map(vendor => {
				return(
					<div key={vendor.id}>
						{vendor.business_name}
					</div>
				)
			})
			return (
					<div>
						<h6>Vendors</h6>
						{allVendor}
					</div>
				)
		} else {
			return(
				<div> 
				</div>
			)
		}

	}
	
}

export default MarketVendor


