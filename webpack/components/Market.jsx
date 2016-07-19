import React from 'react';
import { Link } from 'react-router';
import SimpleMap from './SimpleMap';
import MarketVendor from './MarketVendor'

class Market extends React.Component {
	constructor(props) {
		super(props);
		this.state = { market: {} };
	}

	componentWillMount() {
		$.ajax({
			url: `/api/markets/${this.props.params.id}`,
			type: 'GET',
			dataType: 'JSON'
		}).done( market => {
			this.setState({ market });
		}).fail(data => {
			Materialize.toast('Failed to get market', 4000);
		});
	}

	preparedFoodBoolean() {
	  if(this.state.market.prepared_food === "yes") {
      return(
        <i className="material-icons">check_box</i>
      )
	  } else {
      return(
        <i className="material-icons">check_box_outline_blank</i>
      )
	  }
  }

  petFriendlyBoolean() {
  if(this.state.market.pet_friendly === "yes") {
    return(
      <i className="material-icons">check_box</i>
    )
  } else {
	  return(
	    <i className="material-icons">check_box_outline_blank</i>
	  )
  }
  }

  alcoholBoolean() {
	  if(this.state.market.alcohol === "yes") {
      return(
          <i className="material-icons">check_box</i>
      )
	  } else {
	    return(
	        <i className="material-icons">check_box_outline_blank</i>
	    )
	  }
  }

  craftsBoolean() {
    if(this.state.market.crafts === "yes") {
      return(
        <i className="material-icons">check_box</i>
      )
    } else {
      return(
        <i className="material-icons">check_box_outline_blank</i>
      )
    }
  }

	setMarketVendor() {
		if (this.state.market.id) {
			return (
				<div>
					<MarketVendor market={this.state.market}/>
				</div>
			)
		}
	}


	render() {
		return(
			<div className='row market'>
				<div className='col s12 m8 offset-m2 l6 offset-l4 market-div-map-title valign-wrapper'>
					<p className='market-text market-image valign center'>{this.state.market.name}</p>
				</div>
				<div className='col s12 m8 offset-m2 l6 offset-l4 market-div-map-title'>
					<SimpleMap market={this.state.market}/>
				</div>
				<div className="col s12 m10 offset-m2 l6 offset-l4 market-margin">
					<div className="white-text">
						<div className='row col s12 m12 l12 market-div-props'>
							<div className='col s12 m7 offest-m3 market-address'>
								<p>ADDRESS:</p>
								<p>{this.state.market.address}</p>
								<p>{this.state.market.city + ", " + this.state.market.state + " " + this.state.market.zip}</p>
								<br></br>
								<p>{"SEASON: " + this.state.market.start_date + "  -  " + this.state.market.end_date}</p>
								<p>{"HOURS: " + this.state.market.start_time + "  -  " + this.state.market.end_time}</p>
								<p>{"DAYS OPEN: " + this.state.market.day_of_week}</p>
								<p>PHONE: <a href={"tel:" + this.state.market.contact_phone}>{this.state.market.contact_phone}</a></p>
							</div>
							<div className='col s12 m4 offset-m1 market-extras'>
								<p>{this.petFriendlyBoolean.bind(this)()}<span>Pet Friendly</span></p>
								<p>{this.craftsBoolean.bind(this)()} <span>Crafts</span></p>
								<p>{this.alcoholBoolean.bind(this)()} <span>Alcohol Served</span></p>
								<p>{this.preparedFoodBoolean.bind(this)()} <span>Prepared Foods</span></p>
							</div>
						</div>
					</div>
				</div>
				<div className="col s12 m10 offset-m2 l6 offset-l4 market-margin">
					<div className="white-text">
						<div className='row col s12 m12 l12 market-div-props'>
							<div className='col s12 m7 offest-m3'>
								{this.setMarketVendor()}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


export default Market;
