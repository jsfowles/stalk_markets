import React from 'react';
import { connect } from 'react-redux';

class AddVendorMarket extends React.Component {

	submitMarket(e) {
		e.preventDefault();

		let selectedMarkets = [];

		const vendor_id = this.props.params.vendor_id;

		$("input:checkbox[name=markets]:checked").each(function(){
    	selectedMarkets.push($(this).val());
		});
		
	  $.ajax({
	  	url: `/api/join_tables`,
	  	type: 'POST',
	  	data: {selectedMarkets, vendor_id },
	  	dataType: 'JSON'
	  }).done(data => {
	  	this.props.history.push(`/vendors/${vendor_id}`)
	  	Materialize.toast('Added markets', 4000);
	  }).fail(data => {
	  	Materialize.toast('Failed to add vendor to market', 4000);
	  })   
	}

	render() {
		let checkboxes = [];
		let markets = this.props.markets.map( market => {
				let key = `market-id${market.id}`
					checkboxes.push( 
						<div key={key}>
				  		<input name="markets" type="checkbox" id={market.id} value={market.id} defaultVaule="true" />
				  		<label className='white-text' htmlFor={market.id}>{market.name}</label>
				  	</div> 
					)
		});
		return(
			<div className='vendor-market-margin container'>
			  {checkboxes}
				<form ref='vendorForm' onSubmit={(e) => this.submitMarket(e)} >
					{markets}
					<input type='submit' className='btn' value='Add Markets' />
				</form>
		 </div>
		)
	}
}

const mapStateToProps = (state) => {
	return { markets: state.markets, joinTable: state.vendorMarket }
}

export default connect(mapStateToProps)(AddVendorMarket);

