import React from 'react'
import { Link } from 'react-router';

const Footer = () => (
	<footer className="footer-copyright padded">
    <div className="row white-text container col s6 valign-wrapper footer-padding">
	    © 2016 Stalk Market
	    <Link to='/AboutUs' className="col s6 right-align text-color-white">About Us</Link>
    </div>
	</footer>
)

export default Footer;
