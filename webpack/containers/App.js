import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const App = ({ children }) => (
  <div>
    <Navbar />
    <div className='container'>
      { children }
    </div>
    <Footer />
  </div>
)

export default App;
