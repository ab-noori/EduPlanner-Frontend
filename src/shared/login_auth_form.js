import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../app/features/users/userSlice';
import ErrorMessage from './inputError';
import LoadingModal from './loading';

const AuthenticationLoginForm = ({ buttonName }) => {
  const [nameData, setNameData] = useState('');
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const message = useSelector((state) => state.user.error);

  const handleLoginFormSubmission = (e) => {
    e.preventDefault();
    dispatch(userLogin(nameData))
      .then((response) => {
        if (response.payload) {
          const userInfo = {
            id: response.payload.id,
            name: response.payload.name,
          };
          return userInfo;
        }
        return null;
      })
      .then((userInfo) => {
        if (userInfo) {
          sessionStorage.setItem('status', 'true');
          sessionStorage.setItem('logged_user', JSON.stringify(userInfo));
        }
      })
      .then(() => {
        if (sessionStorage.getItem('status') === 'true') {
          window.location.reload();
        }
      });
  };

  const handleTextInput = (e) => {
    setNameData(e.target.value);
  };

  return (
    <>
      {status === 'loading' && <LoadingModal />}
      <form action="" onSubmit={(e) => handleLoginFormSubmission(e)}>
        <input
          type="text"
          className="name_input"
          value={nameData}
          onChange={(e) => handleTextInput(e)}
          placeholder="Enter your Name.."
        />
        {message !== null && <ErrorMessage message={message} />}
        <button type="submit" className="submit_button">
          {buttonName}
        </button>
      </form>
    </>
  );
};

AuthenticationLoginForm.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default AuthenticationLoginForm;
