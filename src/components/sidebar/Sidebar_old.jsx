import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import './Sidebar.css';

const Sidebar = () => {
  const [navCollapse, setNavCollapse] = useState(false);
  const [smallNavCollapse, setSmallNavCollapse] = useState(false);

  const toggleSidebar = () => {
    setNavCollapse(!navCollapse);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      toggleSidebar();
    }
  };

  const smToggleSidebar = () => {
    setSmallNavCollapse(!smallNavCollapse);
  };

  const smHandleKeyPress = (e) => {
    if (e.key === 'Enter' || e.key === 'Space') {
      smToggleSidebar();
    }
  };

  return (
    <div className="col-md-3 col-lg-2 sidebar">
      <nav className={`${smallNavCollapse ? 'smallNavCollapse' : ''}  nav ${navCollapse ? 'navCollapse' : ''}`}>
        <div className="small-screen-nav">
          <button className="sidebar-toggle-button" onClick={smToggleSidebar} onKeyDown={smHandleKeyPress} type="button" aria-label="Toggle Sidebar" tabIndex={0}>
            {smallNavCollapse ? (
              <i className="bi bi-x" />
            ) : (
              <i className="bi bi-list" />
            )}
          </button>

          <div>
            <h3> EduPlanner </h3>
          </div>
        </div>
        <div className="sidebar-minimizer">
          <button className="sidebar-toggle-button" onClick={toggleSidebar} onKeyDown={handleKeyPress} type="button" aria-label="Toggle Sidebar" tabIndex={0}>
            {navCollapse ? (
              <i className="bi bi-list" />
            ) : (
              <i className="bi bi-x" />
            )}
          </button>
        </div>
      </nav>
      <div className="sidebar">
        <div className={`${smallNavCollapse ? 'smallNavCollapse' : ''} sidebar-container ${navCollapse ? 'navCollapse' : ''}`}>
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="200" height="150" />
          </Link>

          <NavLink className="nav-option" to="/">
            <i className="bi bi-speedometer2" />
            <h5>All COURSES</h5>
          </NavLink>

          <NavLink className="nav-option" to="/course-form">
            <i className="bi bi-pencil-square" />
            <h5>CREATE A COURSE</h5>
          </NavLink>

          <NavLink className="nav-option" to="/my_reservations">
            <i className="bi bi-ui-checks" />
            <h5>MY RESERVATIONS</h5>
          </NavLink>

          <NavLink className="nav-option" to="/new_reservation">
            <i className="bi bi-bookmark-check" />
            <h5>RESERVE A COURSE</h5>
          </NavLink>

          <NavLink className="nav-option" to="/delete-course">
            <i className="bi bi-journal-x" />
            <h5>REMOVE A COURSE</h5>
          </NavLink>

          <NavLink className="nav-option" to="/logout">
            <i className="bi bi-power" />
            <h5>LOG OUT</h5>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
