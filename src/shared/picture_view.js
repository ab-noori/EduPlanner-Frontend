import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import PropTypes from 'prop-types';

const PictureView = ({ image, title, description }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start('finish');
    }
  }, [inView, mainControls]);

  return (
    <div className="display_image image1">
      <motion.div
        ref={ref}
        className="hover_text_holder"
        variants={
          {
            start: { opacity: 0, y: 75 },
            finish: { opacity: 1, y: 0 },
          }
}
        initial="start"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="hover_text_title">{title}</span>
        <p className="hover_text_description">
          📍
          { description}
        </p>
      </motion.div>
      <div className="d_image_holder" />
      <img src={image} alt="display 1" className="d_image" />
    </div>
  );
};

PictureView.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PictureView;
