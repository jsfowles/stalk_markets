import React from 'react';
import { Link } from 'react-router';

class NewVendor extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $('select').material_select();
  }

  handleSubmit(e) {
    e.preventDefault();

    const last_name =  this.refs.lastName.value
    const first_name = this.refs.firstName.value
    const business_name = this.refs.businessName.value
    const description = this.refs.description.value
    const contact_phone =  this.refs.contactPhone.value
    const contact_email = this.refs.contactEmail.value
    const website_link = this.refs.websiteLink.value
    const vendor_type = this.refs.vendorType.value
    $.ajax({
      url: '/api/vendors',
      type: 'POST',
      data: {vendor: {first_name,
                      last_name,
                      business_name,
                      description,
                      contact_email,
                      contact_phone,
                      website_link,
                      vendor_type}},
      dataType: 'JSON'
    }).done (data => {
      this.props.history.push(`/vendors/${data.id}`)
      Materialize.toast('Welcome new vendor!', 4000);
    }).fail (data => {
      Materialize.toast('Failed to create new vendor', 4000);
    });
  }

  render() {
    return (
      <div className="row">
        <div className='col s12 m4'>
        <form ref="todoForm" onSubmit={ (e) => this.handleSubmit(e) }>
          <label>First Name</label>
          <input ref="firstName" />
          <label>Last Name</label>
          <input ref="lastName" />
          <label>Business Name</label>
          <input ref="businessName" />
          <label>Contact Phone</label>
          <input ref="contactPhone" />
          <label>Contact Email</label>
          <input ref="contactEmail" />
          <label>Website Link</label>
          <input ref="websiteLink" />
          <select ref='vendorType' defaultValue="">
            <option value="" disabled>What Type of Vendor Are You?</option>
            <option value="crafts">Crafts</option>
            <option value="produce">Produce</option>
            <option value="prepared food">Prepared Food</option>
          </select>
          <input type='submit' className='btn' value='Create Profile' />
        </form>
        </div>
      </div>
    )
  }
}

export default NewVendor;
