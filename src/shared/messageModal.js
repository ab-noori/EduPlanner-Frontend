import React from 'react';
import PropTypes from 'prop-types';

const MessageModal = ({ message }) => (
  <div className="messageModalHolder">
    <div className="messageSlot">
      <span className="message">
        {message}
      </span>
      <div className="messageLoadingTime" />
    </div>
  </div>
);

MessageModal.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageModal;
