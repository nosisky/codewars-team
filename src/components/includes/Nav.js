import React from 'react';

const Nav = () => {
  return (
    <div className="header-bottom">
      <div className="container-fluid">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            <div className="logo">
              <h1><a className="navbar-brand" href="/"><span>Food<i className="fa fa-apple" aria-hidden="true"></i></span>Cafe <p>Quality Products</p></a></h1>
            </div>
          </div>
  
          <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
            <nav>
              <ul className="nav navbar-nav">
                <li className="active"><a className="scroll" href="index.html">Home</a></li>
                <li><a href="#about" className="scroll hvr-bounce-to-bottom">About</a></li>
                {/* <li><a href="#services" className="scroll hvr-bounce-to-bottom">Services</a></li>
                <li><a href="#team" className="scroll hvr-bounce-to-bottom">Team</a></li>
                <li><a href="#gallery" className="scroll hvr-bounce-to-bottom">Gallery</a></li>
                <li><a href="#contact" className="scroll hvr-bounce-to-bottom">Contact Us</a></li> */}
              </ul>
            </nav>
          </div>
        </nav>
        <div className="head-search">
          <form action="#" method="post">
            <div className="formborder">
              <input type="text" placeholder="Search..." name="Search..." required=""/>
              <input type="submit" value=""/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Nav;
