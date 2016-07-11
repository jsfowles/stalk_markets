import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from './auth/actions';
import { connect } from 'react-redux';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  logout(e) {
    e.preventDefault();
    this.props.dispatch(handleLogout(this.props.history));
  }

  authLink() {
    if(this.props.auth)
      return(
        <div>
          <li><a href='#' onClick={this.logout.bind(this)}>LOGOUT</a></li>
          {/*<li><a href='#'>EDIT PROFILE</a></li>*/}
        </div>
      )
    else {
      return(
        <li><Link to ='/login'>LOGIN</Link></li>
      );
    }
  }

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center"><img src='http://res.cloudinary.com/jsfowles/image/upload/v1467906890/stalkmarket-white_b3e7on.png' className='nav-logo'/></Link>
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
