import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userSignup } from '../app/features/users/userSlice';
import LoadingModal from './loading';
import ErrorMessage from './inputError';

function AuthenticationForm({ buttonName }) {
  const [nameData, setNameData] = useState('');
  const dispatch = useDispatch();
  const status = useSelector((state) => state.user.status);
  const [loader, setLoader] = useState(false);
  const message = 'User Name can\'t be Blank';

  const handleFormSubmition = (e) => {
    e.preventDefault();
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
      })
      .then(() => {
        setLoader(true);
      })
      .then(() => {
        setTimeout(() => {
          setLoader(false);
          window.location.reload();
        }, 1000);
      });
  };

  const handleTextInput = (e) => {
    setNameData(e.target.value);
  };
  return (
    <>
      {status === 'loading' || loader === true ? (<LoadingModal />) : null}

      <form action="" onSubmit={(e) => handleFormSubmition(e)}>
        <input type="text" className="name_input" value={nameData} onChange={(e) => handleTextInput(e)} placeholder="Enter your Name.." />
        {nameData === '' ? (<ErrorMessage message={message} />) : null}
        <button type="submit" className="submit_button" disabled={!nameData}>{buttonName}</button>
      </form>
    </>
  );
}

AuthenticationForm.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default AuthenticationForm;
