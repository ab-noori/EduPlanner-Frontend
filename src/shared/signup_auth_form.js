import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from '../app/features/users/userSlice';
import LoadingModal from './loading';
import ErrorMessage from './inputError';

function AuthenticationForm({ buttonName }) {
  const [nameData, setNameData] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.user.status);
  const message = 'User Name can\'t be Blank';

  const handleFormSubmition = () => {
    dispatch(userSignup(nameData))
      .then((response) => {
        const userInfo = {
          id: response.payload.id,
          name: response.payload.name,
        };

        return userInfo;
      })
      .then((userInfo) => {
        sessionStorage.setItem('status', 'true');
        sessionStorage.setItem('logged_user', JSON.stringify(userInfo));
      });

    if (sessionStorage.getItem('status') === 'true') {
      navigate('home');
    }
  };

  const handleTextInput = (e) => {
    setNameData(e.target.value);
  };
  return (
    <>
      {status === 'loading' ? (<LoadingModal />) : null}

      <form action="" onSubmit={handleFormSubmition}>
        <input type="text" className="name_input" value={nameData} onChange={(e) => handleTextInput(e)} placeholder="Enter your Name.." />
        {nameData === '' ? (<ErrorMessage message={message} />) : null}
        <button type="submit" className="submit_button">{buttonName}</button>
      </form>
    </>
  );
}

AuthenticationForm.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default AuthenticationForm;
