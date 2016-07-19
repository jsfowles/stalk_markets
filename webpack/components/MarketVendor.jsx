import React from 'react';

class MarketVendor extends React.Component {
	constructor(props){
		super(props);
		this.state = { vendors: [] };
	}

	componentDidMount() {
    $.ajax({
      url: `/api/markets/${this.props.market.id}/profile`,
      type: 'GET',
      dataType: 'JSON'
    }).done( vendors => {
      this.setState({ vendors });
    }).fail( data => {
    	Materialize.toast('Failed to get vendors from this market', 4000);
    });
  }

  render() {
  	let allVendor;
  	if (this.state.vendors.length) {
			allVendor = this.state.vendors.map(vendor => {
				return(
					<div key={vendor.id}>
						<a href={`/vendors/${vendor.id}`} className='marketvendor-margin white-text'>{vendor.business_name}</a>
					</div>
				)
			})
			return (
					<div>
						<p className='marketvendor-title'>Vendors Here</p>
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
