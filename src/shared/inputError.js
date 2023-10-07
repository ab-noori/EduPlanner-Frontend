import PropTypes from 'prop-types';

function ErrorMessage({ message }) {
  return (
    <>
      <span className="input_error_message">{message}</span>
    </>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
