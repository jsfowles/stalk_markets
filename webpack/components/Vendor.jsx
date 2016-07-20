import React from 'react';
import Star from './Star';
import SimpleMap from './SimpleMap';
import VendorMarket from './VendorMarket';
import { Link } from 'react-router';


class Vendor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vendor: null, editView: false }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  componentWillMount() {
    $.ajax({
      url: `/api/vendors/${this.props.params.id}`,
      type: 'GET',
      dataType: 'JSON'
    }).done( vendor => {
      this.setState({ vendor });
    }).fail( data => {
      Materialize.toast('Failed to get vendor', 4000);
    });
  }

  componentDidMount() {
    $('.nav-wrapper').css('backgroundColor', '#1F8A70')
    $('#app').css('backgroundColor', '#1F8A70')
    $('.vendor-form').css('backgroundColor', '#1F8A70')
  }

  componentWillUnmount() {
    $('.nav-wrapper').css('backgroundColor', '#003C4F')
    $('#app').css('backgroundColor', '#003C4F')

  }


  toggleEdit() {
    this.setState({ editView: !this.state.editView });
  }

  handleEdit(e) {
    e.preventDefault();
    let first_name = this.refs.first_name.value;
    let last_name = this.refs.last_name.value;
    let business_name = this.refs.business_name.value;
    let description = this.refs.description.value;
    let contact_phone = this.refs.contact_phone.value;
    let contact_email = this.refs.contact_email.value;
    let website_link = this.refs.website_link.value;
    let vendor_type = this.refs.vendor_type.value;


    $.ajax({
      url: `/api/vendors/${this.state.vendor.id}`,
      type: 'PUT',
      data: { vendor: { first_name, last_name, business_name, description, contact_phone, contact_email, website_link,vendor_type } },
      dataType: 'JSON'
    }).done( vendor => {
      this.setState({ vendor, editView: false });
      Materialize.toast('Profile updated!', 4000);
    }).fail( data => {
      Materialize.toast('Failed to finish edit', 4000);

    });
  }

  addFavorite() {
    $.ajax({
      url: '/api/favorites',
      type: 'POST',
      data: { id: this.state.vendor.id}
    }).done( data => {
      Materialize.toast('Favorite!', 2000);
    }).fail( error => {
      Materialize.toast('Failed to Favorite', 4000);
    });
  }

  deleteFavorite() {
    $.ajax({
      url: '/api/favorites',
      type: 'DELETE',
      data: { vendor_id: this.state.vendor.id }
    }).done( data => {
      Materialize.toast('Unfavorited', 2000);
    }).fail( error => {
      Materialize.toast('Failed to delete a favorite vendor', 4000);
    });
  }

  editButton() {
    if(this.state.vendor.user_id === parseInt(localStorage.getItem('userId'))) {
      return (
        <div>
          <button className='btn blue no-margin-btn' onClick={this.toggleEdit}>EDIT PROFILE</button>
        </div>
      );
    }
  }

  render() {
    if(this.state.editView) {
      return(
        <div className='container vendor-form signupvendor'>
          <h3 className='center vendor-form'>Editing: {this.state.vendor.first_name} {this.state.vendor.last_name}</h3>
          <form className= 'vendor-form' onSubmit={this.handleEdit.bind(this)} >
            <input ref='first_name' className='vendor-form white-text' type='text' placeholder='First Name' defaultValue={this.state.vendor.first_name} />
            <input ref='last_name' className='white-text' type='text' placeholder='Last Name' defaultValue={this.state.vendor.last_name} />
            <input ref='business_name' className='white-text' type='text' placeholder='Business Name' defaultValue={this.state.vendor.business_name} />
            <input ref='description' className='white-text' type='text' placeholder='Description' defaultValue={this.state.vendor.description} />
            <input ref='contact_phone' className='white-text' type='text' placeholder='Phone' defaultValue={this.state.vendor.contact_phone} />
            <input ref='contact_email' className='white-text' type='text' placeholder='Email' defaultValue={this.state.vendor.contact_email} />
            <input ref='website_link' className='white-text' type='text' placeholder='Website Link' defaultValue={this.state.vendor.website_link} />
            <input ref='vendor_type' className='white-text' type='text' placeholder='Vendor Type' defaultValue={this.state.vendor.vendor_type} />
            <input type='Submit' defaultValue='Update Vendor' className='btn' />
            <button type='button' onClick={this.toggleEdit} className='btn grey'>Cancel</button>
          </form>
        </div>
      );
    } else {
      if(this.state.vendor) {

        return(
          <div className='row vendor'>
            <div className='col s12 m8 offset-m2 l6 offset-l4 vendor-div-map-title valign-wrapper'>
              <p className='vendor-text vendor-image valign center'>{this.state.vendor.business_name}</p>
            </div>
            <div className="col s12 m10 offset-m2 l6 offset-l4 vendor-margin">
    					<div className="white-text">
    						<div className='row col s12 m12 l12 vendor-div-props'>
    							<div className='col s12 m5 offest-m3 vendor-about'>
                    <p>ABOUT US:</p>
                      {this.state.vendor.description}
                  </div>
                  <div className='col s12 m6 offset-m1 market-extras'>
                    <p>OWNER: </p><p>{this.state.vendor.first_name} {this.state.vendor.last_name}</p>
                    <p>PHONE: </p><a href={"tel:" + this.state.vendor.contact_phone} className='darker-vendor-link'>{this.state.vendor.contact_phone}</a>
                    <p>EMAIL: </p><a href={"mailto:" + this.state.vendor.contact_email} className='darker-vendor-link' target="_top">{this.state.vendor.contact_email}</a>
                    <p>WEBSITE: </p><a href={this.state.vendor.website_link} className='darker-vendor-link' target='_blank'>{this.state.vendor.business_name}</a>
                    <p>{"TYPE: " + this.state.vendor.vendor_type}</p>
                  </div>
               </div>
               <div>
               <div className='row col s12 m12 l12 vendor-div-props favorite-vendor-component'>
                  <div className='col s12 m5 offest-m3'>
                    <p className='favorite-float-right'>Favorite This Vendor</p>
                    <Star vendorId={this.state.vendor.id} addFavorite={ this.addFavorite.bind(this) } deleteFavorite={this.deleteFavorite.bind(this)} />
                  </div>
                  <div className='col s12 m6 offset-m1'>
                    <Link to='/vendors' className='darker-vendor-link'>Back To Vendors</Link>
                    { this.editButton() }
                  </div>
                </div>
              <div className='row col s12 m12 l12 vendor-div-props'>
                <VendorMarket vendor={this.state.vendor} />
                </div>
              </div>
            </div>
          </div>
          </div>
        );
      } else {
        return(
          <div className='row'>
            <h3 className='center'>Vendor Not Loaded...</h3>
          </div>
        )
      }
    }
  }
}


export default Vendor;
