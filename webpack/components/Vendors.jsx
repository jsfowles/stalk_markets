import React from 'react';
import { Link } from 'react-router'

class Vendors extends React.Component {
  constructor(props) {
    super(props);
    this.state = { vendors: [] };
  }

  componentWillMount() {
    $.ajax({
      url: '/api/vendors',
      type: 'GET',
      dataType: 'JSON'
    }).done( vendors => {
      this.setState({ vendors });
    }).fail( data => {
      Materialize.toast('Failed to get all vendors', 4000);
    });
  }

  componentDidMount() {
    $('.nav-wrapper').css('backgroundColor', '#1F8A70')
    $('#app').css('backgroundColor', '#1F8A70')

  }

  componentWillUnmount() {
    $('.nav-wrapper').css('backgroundColor', '#003C4F')
    $('#app').css('backgroundColor', '#003C4F')

  }

  deleteVendor(id) {
    $.ajax({
      url: `/api/vendors/${id}`,
      type: 'DELETE',
      dataType: 'JSON'
    }).done( data => {
      let vendors = this.state.vendors;
      let index = vendors.findIndex( b => b.id === id);
      this.setState({
        vendors:[
          ...vendors.slice(0, index),
          ...vendors.slice(index + 1, vendors.length)
        ]
      })
      Materialize.toast('Deleted Vendor', 4000);
    }).fail( data => {
      Materialize.toast('Failed to delete vendor', 4000);
    })
  }

  displayCards() {
    return this.state.vendors.map( vendor => {
      return(
        <div key={`vendor-${vendor.id}`} className="row">
          <div className="col s12 m8 offset-m2 l6 offset-l3 vendors-div">
            <span><Link to={`/vendors/${vendor.id}`} className="vendors-link">{vendor.business_name}</Link></span>
            <span className='white-text vendor-phone-float'>{vendor.contact_phone}</span>
          </div>
        </div>
      )
    });
  }

  render() {
    return(
      <div>
        <div className='row'>
          <div className="col s12 m8 offset-m2 l6 offset-l3 vendors-name-div top-margin vendors-row-float">
            <span className='vendors-link'>VENDORS</span>
            <span className='white-text vendor-phone-float'>PHONE</span>
          </div>
        </div>
        <div className='col s4 m4 l4'>
          {this.displayCards.bind(this)()}
        </div>
      </div>
    )
  }
}

export default Vendors;
