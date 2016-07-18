import React from 'react';
import { Link } from 'react-router'


const Home = () => (
  // <div>
  //   <div className='row home-row'>
  //     <div className="col s12 m12">
  //       <div className="home-div-markets valign-wrapper home-text-size">
  //         <a className='valign white-text home-markets-link' href="/markets">MARKETS</a>
  //       </div>
  //     </div>
  //     <div className="col s12 m12">
  //       <div className="home-div-vendors valign-wrapper home-text-size">
  //         <a className='valign white-text home-vendors-link' href="/vendors">VENDORS</a>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div>
    <div className="row home-row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <a href="/markets"><img src="https://res.cloudinary.com/jsfowles/image/upload/v1467865623/backgrounds/photo-1442906361539-6f7052120e7b.jpg" className='home-img' /></a>
            <span className="card-title">Markets</span>
          </div>
          <div className="card-content market-content-color">
            <p className='white-text'>Find Utah farmer markets near you!</p>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <a href="/vendors"><img src="https://res.cloudinary.com/jsfowles/image/upload/c_scale,h_2332,w_3456/v1467858323/backgrounds/22gQ9dqRziaAoZeBpZVY_kornmark-01.jpg" className='home-img' /></a>
            <span className="card-title">Vendors</span>
          </div>
          <div className="card-content vendor-content-color">
            <p className='white-text'>Checkout local vendors in Utah!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home;
