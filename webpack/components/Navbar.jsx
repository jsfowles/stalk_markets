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
			return(<li><a href='#' onClick={this.logout.bind(this)}>Logout</a></li>)
		else {
			return(
				<li><Link to ='/login'>Login</Link></li>
			);
		}
	}

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo center">Logo</Link>
            <a href="#" data-activates="mobile-demo" className="button-collapse show-on-large"><i className="material-icons">menu</i></a>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/markets">Markets</Link></li>
              <li><Link to="/vendors">Vendors</Link></li>
              <li><Link to="/about">About</Link></li>
              {this.authLink()}
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect()(Navbar);
