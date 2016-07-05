import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const App = ({ children }) => (
  <div>
    <Navbar />
    <div>
      { children }
    </div>
    <Footer />
  </div>
)

export default App;
