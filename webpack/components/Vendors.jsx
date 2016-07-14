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
        <div key={`vendor-${vendor.id}`} className="row">
          <div className="col s12 m8 offset-m2 l6 offset-l3 markets-name-div">
            <span><Link to={`/vendors/${vendor.id}`} className="vendors-link">{vendor.business_name}</Link></span>
            <span className='white-text distance'>{vendor.contact_phone}</span>
          </div>
        </div>
      )
    });
  }

  render() {
    return(
      <div>
        <div className='row'>
          <div className="col s12 m8 offset-m2 l6 offset-l3 markets-name-div top-margin">
            <span className='markets-link'>VENDORS</span>
            <span className='white-text distance'>PHONE</span>
          </div>
        </div>
        <div className='col s4 m4 l4 box-shadow'>
          {this.displayCards.bind(this)()}
        </div>
      </div>
    )
  }
}

export default Vendors;
