import React from 'react';

class Star extends React.Component{
	constructor(props) {
		super(props);
		//this should come from database
		this.state = { starred: false };
		this.toggleFavorite = this.toggleFavorite.bind(this);
		this.addStar = this.addStar.bind(this);
		this.deleteStar = this.deleteStar.bind(this);

	}

	componentWillMount() {
		$.ajax({
			url: '/api/has_favorite',
		  type: 'GET',
		  data: { vendor_id: this.props.vendorId }
		}).done( starred => {
			this.setState({ starred })
		}).fail( data => {
			Materialize.toast('Failed to favorite', 4000);
		});
	}

	addStar() {
		this.props.addFavorite();
    this.toggleFavorite();
  }

  deleteStar() {
  	this.props.deleteFavorite();
  	this.toggleFavorite();
  }

  toggleFavorite() {
  	this.setState({ starred: !this.state.starred }) 
  }

	favorited() {
		return(
			<div>
				<i className="material-icons clickable" onClick={this.deleteStar}>star</i>
			</div>
		)
  }

  unfavorited() {
  	return(
  		<div>
  			<i className="material-icons clickable" onClick={this.addStar}>star_border</i>
  		</div>
  	)
  }

  render() {
  	if(this.state.starred) {
  		return this.favorited();
  	} else {
  		return this.unfavorited();
  	}
  }

}

export default Star;
