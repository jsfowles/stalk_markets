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

		}).fail (data => {
			console.log(data);
		})
	}

	addMarkets(allMarket) {
		// if(this.props.vendor.user_id === parseInt(localStorage.getItem('userId')))
			if(allMarket)
				return (
					<div>
						{allMarket}
						<Link to={`/join_tables`} className='jointable-link'>Add Markets</Link>
					</div>
				)
			else
				return (
					<Link to={`/join_tables`} className='jointable-link'>Add Markets</Link>
				);
	}

	render() {
		if (this.state.markets.length > 0) {
			let allMarket = this.state.markets.map(market => {
				return(
					<div key={market.id}>
						{market.name}
						<button className="btn red" onClick={() => this.deleteMarket(market.id)}>X</button>
					</div>
				)
			})

			return (
				<div>
				<h6>Vendor Markets</h6>
					{ this.addMarkets(allMarket) }
				</div>
			)
		} else {
			return (
				<div>
					<h6>No Markets</h6>
					{ this.addMarkets() }
				</div>
			)
		}
	}

}

const mapStateToProps = (state) => {
	return { joinTable: state.vendorMarket }
}


export default connect(mapStateToProps)(VendorMarket);
