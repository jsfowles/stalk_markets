import React from 'react';
import { Link } from 'react-router'


const Home = () => (
  <div className='row home-row'>
    <div className="col s12 m3 offset-m1">
      <div className="home-div-vendors valign-wrapper">
        <a className='valign' href="/vendors">VENDORS</a>
      </div>
    </div>
    <div className="col s12 m3">
      <div className="home-div-markets valign-wrapper">
        <a className='valign' href="/markets">MARKETS</a>
      </div>
    </div>
    <div className="col s12 m3">
      <div className="home-div-markets valign-wrapper">
        <a className='valign' href="/signup">SIGN UP</a>
      </div>
    </div>
  </div>

)

export default Home;
