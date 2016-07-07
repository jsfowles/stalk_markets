import React from 'react';
import { connect } from 'react-redux';

class AddVendorMarket extends React.Component {
	submitMarket(e) {
		e.preventDefault();

		const vendor_id = this.refs.vendorType.value;
		const market_id = '';

	  $.ajax({
	  	url: `/api/join_tables`,
	  	type: 'POST',
	  	data: {join_table: {market_id, vendor_id }},
	  	dataType: 'JSON'
	  }).done(data => {

	  }).fail(data => {
	  	console.log(data);
	  })   
	}

	render () {
		let markets = this.props.markets.map( market => {
		  return ( <option vaule={market.id}>{market.name}</option> )
		});
		return(
			<div>
				<form ref='vendorForm' onSubmit={(e) => this.submitMarket(e)} >
					<select className='browser-default' ref='add_market'>
					<option value="" disabled selected>Choose A Market/Markets</option>
						{markets}
					</select>
					<input type='submit' className='btn' value='Add Markets' />
				</form>
		 </div>
		)
	}
}

const mapStateToProps = (state) => {
	return { markets: state.markets }
}

export default connect(mapStateToProps)(AddVendorMarket);