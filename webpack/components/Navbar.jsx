import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.authLink = this.authLink.bind(this);
  }

  logout(e) {
    e.preventDefault();
    this.props.dispatch(handleLogout(this.props.history));
  }

  editLink() {
    if(localStorage.getItem('vendorId')) {
      return(
        <li><Link to={`/vendors/${parseInt(localStorage.getItem('vendorId'))}`}>EDIT PROFILE</Link></li>
      )
    } else {
      // return an edit shopper link that connects to a new shopper component
    }
  }

  authLink() {
    if(this.props.auth) {

      return(
        <div>
          <li><Link to="/favorites">FAVORITES</Link></li>
          { this.editLink() }
          <li><a href='#' onClick={this.logout.bind(this)}>LOGOUT</a></li>
        </div>
      )
    } else {
      return(
        <div>
          <li><Link to ='/login'>LOGIN</Link></li>
          <li><Link to="/signupshopper">SIGN UP</Link></li>
        </div>
      );
    }
  }

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper col s12 m8 offset-m2 l6 offset-l4 z-depth-2">
            <Link to="/" className="brand-logo center"><img src='https://res.cloudinary.com/jsfowles/image/upload/v1468708498/stalkmarket-white_pc4som.png' className='nav-logo'/></Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/markets">MARKETS</Link></li>
              <li><Link to="/vendors">VENDORS</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              {this.authLink()}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect()(Navbar);
