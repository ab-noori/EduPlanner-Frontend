import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Sidebar = ({ isOpen, toggle }) => (
  <div className={`sidebar ${isOpen ? 'open' : ''}`}>
    <button type="button" className="close-button" onClick={toggle}>X</button>
    <nav className="navigationLinksHolder">
      <NavLink className="nav-option" to="/" onClick={toggle}>
        <h5>All COURSES</h5>
      </NavLink>

      <NavLink className="nav-option" to="/course-form" onClick={toggle}>
        <h5>CREATE A COURSE</h5>
      </NavLink>

      <NavLink className="nav-option" to="/my_reservations" onClick={toggle}>
        <h5>MY RESERVATIONS</h5>
      </NavLink>

      <NavLink className="nav-option" to="/new_reservation" onClick={toggle}>
        <h5>RESERVE A COURSE</h5>
      </NavLink>

      <NavLink className="nav-option" to="/delete-course" onClick={toggle}>
        <h5>REMOVE A COURSE</h5>
      </NavLink>

      <NavLink className="nav-option" to="/logout" onClick={toggle}>
        <h5>LOG OUT</h5>
      </NavLink>
    </nav>
  </div>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Sidebar;
