import PropTypes from 'prop-types';

function MessageModal({ message }) {
  return (
    <div className="messageModalHolder">
      <div className="messageSlot">
        <span className="message">
          {message}
        </span>
        <div className="messageLoadingTime" />
      </div>
    </div>
  );
}

MessageModal.propTypes = {
  message: PropTypes.string.isRequired,
};

export default MessageModal;
