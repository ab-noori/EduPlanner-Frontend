import './App.css';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/landing_page';
import Login from './components/auth/login';
import Signup from './components/auth/signup';

function App() {
  const status = sessionStorage.getItem('status');

  return (
    <>
      {status === 'false' ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      ) : null}
    </>
  );
}

export default App;
