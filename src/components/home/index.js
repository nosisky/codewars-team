import React, {Fragment} from 'react';
import Nav from '../includes/Nav';
import Slider from '../includes/Slider';
import About from '../includes/About';

const index = () => {
  return (
    <Fragment>
      <Nav/>
      <Slider/>
      <About/>
    </Fragment>
  );
};

export default index;
