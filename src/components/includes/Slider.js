import React from 'react';

const Slider = () => {
  return (
<div className="banner-silder">
  <div id="JiSlider" className="jislider">
    <ul>
      <li>
        <div className="w3layouts-banner-top">
          <div className="container">
            <div className="col-md-6 bannerimg">
            </div>
            <div className="col-md-6 agileits-banner-info">
              <h3>Confused on what to eat?</h3>
              <h3 style={{
                fontSize: 40
              }}>Need food idea for your special occasion?</h3>
               <p>Foodcafe got you covered!</p>
              <div className="more">
                <a href="#" className="hvr-shutter-in-vertical">Get Food Idea Now<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>	
            <div className="clearfix"></div>
          </div>
        </div>
      </li>
      <li>
        <div className="w3layouts-banner-top w3layouts-banner-top1">
          <div className="container">
            <div className="col-md-6 bannerimg1">
            </div>
            <div className="col-md-6 agileits-banner-info">
              <h3>Affordable Prices, Highest Quality</h3>
              <h3>Products</h3>
               <p>Fresh Fruits from our fruit land</p>
              <div className="more">
                <a href="#" className="hvr-shutter-in-vertical">Read More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>	
            <div className="clearfix"></div>
          </div>
        </div>
      </li>
      <li>
        <div className="w3layouts-banner-top w3layouts-banner-top2">
          <div className="container">
            <div className="col-md-6 bannerimg2">
            </div>
            <div className="col-md-6 agileits-banner-info">
              <h3>We Have Wide Range Of</h3> 
              <h3>Products</h3>
               <p>Fresh Fruits from our fruit land</p>
              <div className="more">
                <a href="#" className="hvr-shutter-in-vertical" data-toggle="modal" data-target="#myModal">Read More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>	
            <div className="clearfix"></div>
          </div>
        </div>
      </li>
      <li>
        <div className="w3layouts-banner-top w3layouts-banner-top3">
          <div className="container">
            <div className="col-md-6 bannerimg3">
            </div>
            <div className="col-md-6 agileits-banner-info">
              <h3>We Grow & Sell Organic Food</h3>
              <h3>Collection</h3>
               <p>Fresh Fruits from our fruit land</p>
              <div className="more">
                <a href="#" className="hvr-shutter-in-vertical">Read More <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
              </div>
            </div>	
            <div className="clearfix"></div>
          </div>
        </div>
      </li>

    </ul>
  </div>
  </div>
  );
};

export default Slider;
