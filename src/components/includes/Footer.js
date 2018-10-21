import React from 'react';

const Footer = () => {
  return (
  <div className="footer">
    <div className="container">
      <div className="col-md-6 footernav">
        <div className="agileits-social">
        <ul>
          <li><a href="#home" className="scroll">Home</a></li>
          <li><a href="#about" className="scroll">About</a></li>
          <li><a href="#fruits" className="scroll">Fruits Collections</a></li>
        </ul>
      </div>
      </div>
      <div className="col-md-6 copyright">
        <p>© 2018 Food Cafe. All rights reserved | Designed with love by <a href="!#">FoodCafe</a></p>
      </div>
    </div>
  </div>
  );
};

export default Footer;
