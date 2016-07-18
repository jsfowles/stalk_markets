import React from 'react';

class MarketVendor extends React.Component {
	constructor(props){
		super(props);
		this.state = { vendors: [] };
	}

	componentWillMount() {
	  console.log("MarketVendor.jsx")
		console.log(this.props.market.id)
		debugger
		if (this.props.market.id) {
	    $.ajax({
	      url: `/api/markets/${this.props.market.id}/profile`,
	      type: 'GET',
	      dataType: 'JSON'
	    }).done( vendors => {
	    	debugger
	      this.setState({ vendors });
	    }).fail( data => {
	    	debugger
	      console.log(data);
	    });
	  }
  }

  render() {
  	if (this.state.vendors.length) {
			let allVendor = this.state.vendors.map(vendor => {
				return(
					<div key={vendor.id}>
						{vendor.name}
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
