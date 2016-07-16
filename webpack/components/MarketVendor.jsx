import React from 'react';

class MarketVendor extends React.Component {
	constructor(props){
		super(props);
		this.state = { vendors: [] };
	}

	componentWillMount() {
		if (this.props.market.id) {
	    $.ajax({
	      url: `/api/markets/${this.props.market.id}/profile`,
	      type: 'GET',
	      dataType: 'JSON'
	    }).done( vendors => {
	      this.setState({ vendors });
	    }).fail( data => {
	      console.log(data);
	    });
	  }
  }

  render() {
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
	}

}

export default MarketVendor
