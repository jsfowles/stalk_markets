import React from 'react'

const About = () => (
	<div>
		<h1 className="header center">About (logo here)</h1>
		<div className="container">
		  <h3 className='center'>What Can You Do Here?</h3>
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
		  <h3 className="center">Why Did We Build This Website?</h3>
		  <p className="center container">We've notice that there is no real place online to look for infomation on farmer markets in the wasatch front, so we created a website that will display information about Farmer Markets and vendors that are part of that market.</p>
		  <h3 className="center">What Problems Did We Solve?</h3>
		  <p className="center container">We have made it easier to find your favorite farmers market and give you a chance to connect with hardworking vendors who want to share their amazing produce with people like you!</p>
		</div>
	</div>
)

export default About;