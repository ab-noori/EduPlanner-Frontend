import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import github from '../../assets/images/icons/github.png';
import gmail from '../../assets/images/icons/gmail.png';
import linkdn from '../../assets/images/icons/linkdn.png';

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
    <section className="otherNavInfo">
      <section className="socials">
        <a href="https://github.com/ab-noori/EduPlanner-Backend">
          <img src={github} alt="social media logo" className="socials_logo" />
        </a>
        <a href="https://github.com/ab-noori/EduPlanner-Backend/tree/dev#authors">
          <img src={linkdn} alt="social media logo" className="socials_logo" />
        </a>
        <a href="https://github.com/ab-noori/EduPlanner-Backend/tree/dev#authors">
          <img src={gmail} alt="social media logo" className="socials_logo" />
        </a>
      </section>
      <span className="rightsReserved">@Eduplanner corporations</span>
    </section>
  </div>
);

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Sidebar;
