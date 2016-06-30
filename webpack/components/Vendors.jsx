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
      console.log(data);
    });
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
    }).fail( data => {
      console.log(data);
    })
  }

  displayCards() {
    return this.state.vendors.map( vendor => {
      return(
        <div key={`vendor-${vendor.id}`} className="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{vendor.business_name}</span>
              <p>{vendor.first_name}</p>
              <p>{vendor.last_name}</p>
              <p>{vendor.contact_phone}</p>
              <p>{vendor.contact_email}</p>
              <p>{vendor.website_link}</p>
              <p>{vendor.vendor_type}</p>

            </div>
            <div className="card-action">
              <Link to={`/vendors/${vendor.id}`}>Show</Link>
              <button onClick={() => this.deleteVendor(vendor.id)} className='btn red'>Delete Vendor</button>
            </div>
          </div>
        </div>
      )
    });
  }

  render() {
    return(
      <div className='row'>
        {this.displayCards.bind(this)()}
      </div>
    )
  }
}

export default Vendors;
