import React from 'react'
import { Link } from 'react-router';

const Footer = () => (
  <footer className="page-footer">
	  <div className="footer-copyright">
	    <div className="container">
	    © 2016 Stalk Market
	    <Link to='/AboutUs' className="grey-text text-lighten-4 right">About Us</Link>
	    </div>
	  </div>
	</footer>
)

export default Footer;