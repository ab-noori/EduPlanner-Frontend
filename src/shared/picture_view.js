import React from 'react';
import PropTypes from 'prop-types';

const PictureView = ({ image }) => (
  <div className="display_image image1">
    <div className="d_image_holder" />
    <img src={image} alt="display 1" className="d_image" />
  </div>
);

PictureView.propTypes = {
  image: PropTypes.string.isRequired,
};

export default PictureView;
