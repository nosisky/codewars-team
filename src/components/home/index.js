import React, {Fragment} from 'react';
import Nav from '../includes/Nav';
import Slider from '../includes/Slider';
import About from '../includes/About';
import Services from '../includes/Services';
import Footer from '../includes/Footer';

const index = () => {
  return (
    <Fragment>
      <Nav isHome={true}/>
      <Slider/>
      <About/>
      <Services/>
      <Footer/>
    </Fragment>
  );
};

export default index;
