import React from 'react'
import { Link } from 'react-router';

const Footer = () => (
	  <footer className="footer-copyright padded">
	    <div className="row white-text container col m10 footer-height valign-wrapper">
	    © 2016 Stalk Market
	    <Link to='/AboutUs' className="col m2 right-align">About Us</Link>
	    </div>
	</footer>


)
export default Footer;
