import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <>
    <span className="input_error_message">{message}</span>
  </>
);

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
