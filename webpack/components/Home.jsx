import React from 'react';
import { Link } from 'react-router'


const Home = () => (
  <div>
    <div className='row home-row'>
      <div className="col s12 m12">
        <div className="home-div-markets valign-wrapper home-text-size">
          <a className='valign white-text home-markets-link' href="/markets">MARKETS</a>
        </div>
      </div>
      <div className="col s12 m12">
        <div className="home-div-vendors valign-wrapper home-text-size">
          <a className='valign white-text home-vendors-link' href="/vendors">VENDORS</a>
        </div>
      </div>
    </div>
  </div>
)

export default Home;
