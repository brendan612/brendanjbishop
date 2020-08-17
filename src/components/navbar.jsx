import React, { Component } from "react";

const Navbar = ({ my_logo }) => {
  const logo_style = {
    maxWidth: "75px",
    maxHeight: "75px"
  };

  const navbar_style = {
    opacity: "1"
  };

  return (
    <nav className="navbar navbar-dark fixed-top" style={navbar_style}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="img-responsive"
            src={my_logo}
            alt="Logo"
            style={logo_style}
          />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item hvr-underline-from-center">
            <a href="#about">About</a>
          </li>
          <li className="nav-item hvr-underline-from-center">
            <a href="#work">Work</a>
          </li>
          <li className="nav-item hvr-underline-from-center">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
