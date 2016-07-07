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
			return(<li><a href='#' onClick={this.logout.bind(this)}>LOGOUT</a></li>)
		else {
			return(
				<li><Link to ='/login'>LOGOUT</Link></li>
			);
		}
	}

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center"><img src='http://res.cloudinary.com/jsfowles/image/upload/v1467906890/stalkmarket-white_b3e7on.png' className='nav-logo'/></Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="left hide-on-med-and-down">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/markets">MARKETS</Link></li>
              <li><Link to="/vendors">VENDORS</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              {this.authLink()}
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/markets">MARKETS</Link></li>
              <li><Link to="/vendors">VENDORS</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              {this.authLink()}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

{/* OLD NAVBAR
  <header>
    <ul id="dropdown1" className="dropdown-content">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/markets'>Markets</Link></li>
      <li><Link to='/vendors'>Vendors</Link></li>
      <li><Link to='/About'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      {this.authLink()}
    </ul>

    <nav>
      <div className="nav-wrapper">
        <Link to='/' className='brand-logo center contain'>StalkMarket</Link>
        <ul id="nav-mobile">
          <li><Link className='dropdown-button' to="/" data-activates="dropdown1"><i className="material-icons right">reorder</i></Link></li>
        </ul>
      </div>
    </nav>
  </header>
*/}


export default connect()(Navbar);
