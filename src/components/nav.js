import React from "react";

const Nav = () => (
  <nav className="main-nav">
    <div className="logo-nav">
      <li>
        <i class="fas fa-sun" />
      </li>
      <li>
        <a href="#" id="logo">
          OpenWeatherMap
        </a>
      </li>
    </div>
    <div className="sub-nav">
      <li>
        <a href="#" className="nav-links">
          Weather
        </a>
      </li>
      <li>
        <a href="#" className="nav-links">
          Maps
        </a>
      </li>
      <li>
        <a href="#" className="nav-links">
          API
        </a>
      </li>
      <li>
        <a href="#" className="nav-links">
          Price
        </a>
      </li>
      <li>
        <a href="#" className="nav-links">
          Partners
        </a>
      </li>
      <li>
        <a href="#" className="nav-links">
          Stations
        </a>
      </li>
      <li>
        <a href="#" className="nav-links">
          Widgets
        </a>
      </li>
      <li>
        <a href="#" className="nav-links">
          Blog
        </a>
      </li>
    </div>
  </nav>
);

export default Nav;
