import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

function Sidebar() {
  return (
    <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light sidebar" style={{ zIndex: 2 }}>
      <div className="position-sticky">
        <div className="p-1">
          <img src={logo} alt="Logo" width="200" height="150" />
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link" to="/course-form">Add a New Course</Link>
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
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
