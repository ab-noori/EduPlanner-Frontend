import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import LoadingModal from '../shared/loading';

function Logout() {
  const [loggedOff, setLoggedOff] = useState(false);
  // const navigate = useNavigate();
  setLoggedOff(true);
  setTimeout(() => {
    setLoggedOff(false);
    sessionStorage.removeItem('logged_user');
    sessionStorage.setItem('status', 'false');
    window.location.reload();
    // navigate('/');
  }, 2000);

  return (
    <div>
      {loggedOff && <LoadingModal />}
    </div>
  );
}

export default Logout;
