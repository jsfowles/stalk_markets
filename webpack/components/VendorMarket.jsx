import React from 'react';


class VendorMarket extends React.Component {
	constructor(props){
		super(props);
		this.state = { vendorMarket: [] };
	}

	componentWillMount() {
    $.ajax({
      url: `/api/vendors/${this.props.vendor.id}/profile`,
      type: 'GET',
      dataType: 'JSON'
    }).done( vendorMarket => {
      this.setState({ vendorMarket });
    }).fail( data => {
      console.log(data);
    });
  }
	render() {
		if (this.state.vendorMarket.length > 0) {
			return(
				<div>
					{this.state.vendorMarket}
				</div>
			)
		}
		else {
			return (
				<div>
					<h3>No Markets</h3>
				</div>
			)
		}
	}

}

export default VendorMarket