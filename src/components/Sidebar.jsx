import React from 'react';
import logo from '../assets/images/logo.png';

function Sidebar() {
  return (
    <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar" style={{ zIndex: 2 }}>
      <div className="position-sticky">
        {/* Logo */}
        <div className="p-1">
          <img src={logo} alt="Logo" width="200" height="150" />
        </div>
        <ul className="nav flex-column">
          {/* Sidebar Content Goes Here */}
          <li className="nav-item">
            <h3 className="nav-link">Navlink 1</h3>
          </li>
          <li className="nav-item">
            <h3 className="nav-link">Navlink 2</h3>
          </li>
          <li className="nav-item">
            <h3 className="nav-link">Navlink 3</h3>
          </li>
          <li className="nav-item">
            <h3 className="nav-link">Navlink 4</h3>
          </li>
          {/* Add your sidebar links here */}
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
