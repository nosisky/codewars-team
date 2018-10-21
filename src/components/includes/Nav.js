import React from 'react';
import {Link} from 'react-router-dom';

const Nav = ({isHome}) => {
  return (
    <div className={isHome ? "header-bottom": 'header-bottom-2'}>
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
                <li><a href="#fruits" className="scroll hvr-bounce-to-bottom">Fruit collections</a></li>
              </ul>
            </nav>
          </div>
        </nav>
        <div className="head-search">
          <Link to="/food-idea">
          <button className="btn btn-dark"><b>Get Food Idea</b></button>          
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
