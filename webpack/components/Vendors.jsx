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
          <div className="col s12 m5 offset-m4 vendors-name-div">
            <span><Link to={`/vendors/${vendor.id}`} className="vendors-link">{vendor.business_name}</Link></span>
          </div>
        </div>
      )
    });
  }

  render() {
    return(
      <div className='vendors'>
        {this.displayCards.bind(this)()}
      </div>
    )
  }
}

export default Vendors;
