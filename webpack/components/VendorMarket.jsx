import React from 'react';
import { Link } from 'react-router';
import AddVendorMarket from './AddVendorMarket';
import { connect } from 'react-redux';


class VendorMarket extends React.Component {
	constructor(props){
		super(props);
		this.state = { markets: [] };
	}

	componentWillMount() {
    $.ajax({
      url: `/api/vendors/${this.props.vendor.id}/profile`,
      type: 'GET',
      dataType: 'JSON'
    }).done( markets => {
      this.setState({ markets });
    }).fail( data => {
    	Materialize.toast('Failed to get markets of vendor', 4000);
      console.log(data);
    });
  }

  deleteMarket(mId){
			$.ajax({
			url: `/api/join_tables/${mId}`,
			data: { vendor_id: this.props.vendor.id},
			type: 'DELETE',
			dataType: 'JSON'
		}).done ( market => {
			let markets = this.state.markets;
			let index = markets.findIndex(x => x.id === mId);
			this.setState({
				markets: [
					...markets.slice(0, index),
					...markets.slice(index + 1, markets.length )
				]
			});
			Materialize.toast('Deleted Market', 2000);
		}).fail (data => {
			Materialize.toast('Failed to delete market from your markets', 4000);
			console.log(data);
		})
	}

	addMarkets(allMarket) {
		let addMarketsButton;
		if(this.props.vendor.user_id === parseInt(localStorage.getItem('userId')))
			addMarketsButton = <Link to={`/join_tables/${this.props.vendor.id}`} className='jointable-link'>Add Markets</Link>;
		return (
		  <div>
			  {allMarket}
			  {addMarketsButton}
			</div>)
	}

	deleteButton(market) {
		if(this.props.vendor.user_id === parseInt(localStorage.getItem('userId')))
			return(<a className="float-right" onClick={() => this.deleteMarket(market.id)}>Delete</a>)
	}

	render() {
		let allMarket = [];
		if (this.state.markets.length > 0) {
			allMarket = this.state.markets.map(market => {
				return(
					<div key={market.id} className='vendormarket-margin'>
						<a href={`/markets/${market.id}`} className='white-text'>{market.name}</a>
						{this.deleteButton.bind(this)(market)}
					</div>
				)
			})

			return (
				<div>
				<p className='vendormarket-title'>Vendor Markets</p>
					{ this.addMarkets(allMarket) }
				</div>
			)
		} else {
			return (
				<div>
					<p className='vendormarket-title'>No Markets</p>
					{ this.addMarkets(allMarket) }
				</div>
			)
		}
	}

}

const mapStateToProps = (state) => {
	return { joinTable: state.vendorMarket }
}


export default connect(mapStateToProps)(VendorMarket);