import React from "react";

const Nav = () => (
  <nav className="main-nav">
    <div className="logo-nav">
      <li>
        <i className="fas fa-sun" />
      </li>
      <li>
        <a id="logo">OpenWeatherMap</a>
      </li>
    </div>
    <div className="sub-nav">
      <li>
        <a className="nav-links">Weather</a>
      </li>
      <li>
        <a className="nav-links">Maps</a>
      </li>
      <li>
        <a className="nav-links">API</a>
      </li>
      <li>
        <a className="nav-links">Price</a>
      </li>
      <li>
        <a className="nav-links">Partners</a>
      </li>
      <li>
        <a className="nav-links">Stations</a>
      </li>
      <li>
        <a className="nav-links">Widgets</a>
      </li>
      <li>
        <a className="nav-links">Blog</a>
      </li>
    </div>
  </nav>
);

export default Nav;
