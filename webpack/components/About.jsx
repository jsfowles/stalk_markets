import React from 'react'

const About = () => (
	<div>
		<h1 className="header">About (logo here)</h1>
		<div className="container">
		  <h3>What Can You Do Here?</h3>
		  <div className="row">
		    <div className="col offset-m2	">
		      <ol>
		        <li>Find your favorite farmers market and vendors.</li>
		        <li>Find out more information about the vendors you support.</li>
		        <li>Learn more about farmers market you are interested in.</li>
		        <li>Connect with local vendors and follow them!</li>
		      </ol>
		    </div>
		  </div>
		  <h3 className="container">Why Did We Build This Website?</h3>
		  <p>We've notice that there is no real place online to look for infomation on farmer markets in the wasatch front, so we created a website that will display information about Farmer Markets and vendors that are part of that market.</p>
		  <h3>What Problems Did We Solve?</h3>
		  <p>We have made it easier to find your favorite farmers market and give you a chance to connect with hardworking vendors who want to share their amazing produce with people like you!</p>
		</div>
	</div>
)

export default About;