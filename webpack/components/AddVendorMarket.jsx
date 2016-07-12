import React from 'react';
import { connect } from 'react-redux';

class AddVendorMarket extends React.Component {

	submitMarket(e) {
		e.preventDefault();

		let selectedMarkets = [];

		const vendor_id = this.props.vendorId;

		$("input:checkbox[name=markets]:checked").each(function(){
    	selectedMarkets.push($(this).val());
    	console.log(selectedMarkets)
		});
		
		// const market_id = '';

	  $.ajax({
	  	url: `/api/join_tables`,
	  	type: 'POST',
	  	data: {selectedMarkets, vendor_id },
	  	dataType: 'JSON'
	  }).done(data => {
	  	this.props.history.push('/vendors')
	  }).fail(data => {
	  	console.log(data);
	  })   
	}

	render() {
		let markets = this.props.markets.map( market => {
			let key = `market-id${market.id}`
		  return ( 
		  	<div key={key}>
		  		<input name="markets" type="checkbox" id={market.id} value={market.id} />
		  		<label htmlFor={market.id}>{market.name}</label>
		  	</div> 
		  	)
		});
		return(
			<div>
				<form ref='vendorForm' onSubmit={(e) => this.submitMarket(e)} >
					{markets}
					<input type='submit' className='btn' value='Add Markets' />
				</form>
		 </div>
		)
	}
}

const mapStateToProps = (state) => {
	return { markets: state.markets, vendorId: state.auth.id }
}

export default connect(mapStateToProps)(AddVendorMarket);