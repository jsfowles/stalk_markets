import React from 'react';
import {Link} from 'react-router';
// import {handleLogout} from './auth/actions';


class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }
    authLink() {
      return (
        <li><Link to='/login'>Login</Link></li>
      )
    }

    render() {
      return (
        <header>
          <div class="navbar-fixed">
            <nav>
              <div className="nav-wrapper">
                <Link to='/' className='brand-logo contain'>StalkMarket</Link>
                <ul id="nav-mobile"  className="right">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  {this.authLink()}
                </ul>
              </div>
            </nav>
          </div>
        </header>
      )
    }
  }

export default Navbar
