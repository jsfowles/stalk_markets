import React from 'react';
import { connect } from 'react-redux';

class AddVendorMarket extends React.Component {

	submitMarket(e) {
		e.preventDefault();

		let selectedMarkets = [];

		const vendor_id = this.props.vendorId;

		$("input:checkbox[name=markets]:checked").each(function(){
    	selectedMarkets.push($(this).val());
		});
		
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
		let checkboxes = [];
		let markets = this.props.markets.map( market => {
			let tables = this.props.joinTable.map( table => {
				let key = `market-id${market.id}`
				if( table.market_id === market.id ) {
					checkboxes.push( 
						<div key={key}>
				  		<input name="markets" type="checkbox" id={market.id} value={market.id} defaultVaule="true" />
				  		<label htmlFor={market.id}>{market.name}</label>
				  	</div> 
					)
				} else {
				  checkboxes.push ( 
				  	<div key={key}>
				  		<input name="markets" type="checkbox" id={market.id} value={market.id} />
				  		<label htmlFor={market.id}>{market.name}</label>
				  	</div> 
				  	)
			  }
			})
		});
		return(
			<div>
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
	return { markets: state.markets, vendorId: state.auth.id, joinTable: state.vendorMarket }
}

export default connect(mapStateToProps)(AddVendorMarket);