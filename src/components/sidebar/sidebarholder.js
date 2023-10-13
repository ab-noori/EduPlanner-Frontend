import React, { useState } from 'react';
import Sidebar from './sidebar';
import '../../styles/sidebar.css';

const SideBarHolder = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menuHolder">
      <button type="button" onClick={toggleSidebar} className="hamburger-button">&#9776;</button>
      <Sidebar isOpen={isOpen} toggle={toggleSidebar} />
    </div>
  );
};

export default SideBarHolder;
