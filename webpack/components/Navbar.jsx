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
          <ul id="dropdown1" className="dropdown-content">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/markets'>Markets</Link></li>
            <li><Link to='/vendors'>Vendors</Link></li>
            <li><a href='/about'>About</a></li>
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
      );
    }
  }

export default Navbar;
