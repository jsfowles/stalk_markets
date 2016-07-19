import React from 'react'

const About = () => (
	<div>
		<div className="container">
		  <p className='about-title center'>What Can You Do Here?</p>
		  <div className="row">
		    <div>
		      <ul className='center'>
		        <li>1. Find your favorite farmers market and vendors.</li>
		        <li>2. Find out more information about the vendors you support.</li>
		        <li>3. Learn more about farmers market you are interested in.</li>
		        <li>4. Connect with local vendors and follow them!</li>
		      </ul>
		    </div>
		  </div>
		  <p className="about-title center">Why Did We Build This Website?</p>
		  <div className='container'>
		  	<p className="center container">Given how popular farmers markets have become recently, we were surprised to find how inconvenient it was to find reliable information about farmers markets in Utah. In addition, most markets provided no reliable information about the vendors that participate. StalkMarkets is designed to fix that by providing accurate information about markets, listing them in order of proximity to your current location, showing you the vendors that attend them, and allowing you to star your favorite vendors. You can also find each vendor’s market schedule. StalkMarkets was created to help easily connect people with their closest market and more easily engage with the local food movement.</p>
		  </div>
		  <p className="about-title center">What Problems Did We Solve?</p>
		  <div className='container'>
		  	<p className="center container about-bottom-margin">We have made it easier to find your favorite farmers markets, based on proximity to your current location, and give you a chance to connect with hardworking vendors who want to share their amazing produce with people like you!</p>
		  </div>
		</div>
	</div>
)

export default About;
