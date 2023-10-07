import React from 'react';
import PropTypes from 'prop-types';

function Arrow({ className, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick();
    }
  };

  return (
    <div
      className={`btn btn-lg btn-success ${className}`}
      style={{
        display: 'block',
        height: '40px',
        width: '60px',
        cursor: 'pointer',
      }}
      onClick={handleClick}
      onKeyDown={handleKeyDown} // Handle keyboard events
      tabIndex={0}
      role="button"
      aria-label="Next Slide"
    />
  );
}

Arrow.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Arrow.defaultProps = {
  className: '',
  onClick: null,
};

export default Arrow;
