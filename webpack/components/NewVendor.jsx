import React from 'react';

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
                      contact_email,
                      contact_phone,
                      website_link,
                      vendor_type}},
      dataType: 'JSON'
    }).done (data => {
      this.props.history.push(`/vendors/${data.id}`)
    }).fail (data => {
      //TODO: handle errors better
      console.log(data)
    });
  }

  render() {
    return (
      <div className="row">
        <div className='col s12 m4 offset-m4'>
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
          <select ref='vendorType'>
            <option value="" disabled selected>What Type of Vendor Are You?</option>
            <option value="crafts">Crafts</option>
            <option value="vendor">Food</option>
          </select>
          <input type='submit' className='btn' value='Create Profile' />
        </form>
        </div>
      </div>
    )
  }
}

export default NewVendor;
