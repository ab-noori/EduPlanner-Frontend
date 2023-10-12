import { useState, useEffect } from 'react';
import LoadingModal from '../shared/loading';

function Logout() {
  const [loggedOff, setLoggedOff] = useState(false);

  useEffect(() => {
    setLoggedOff(true);
    setTimeout(() => {
      setLoggedOff(false);
      sessionStorage.removeItem('logged_user');
      sessionStorage.setItem('status', 'false');
      window.location.reload();
    }, 2000);
  }, [setLoggedOff]);

  return (
    <div>
      {loggedOff && <LoadingModal />}
    </div>
  );
}

export default Logout;
