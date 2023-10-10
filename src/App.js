import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LandingPage from './components/landing_page';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import Home from './components/home';
import ReservationsPage from './components/reservations';
import NewReservation from './components/newReservation';

function App() {
  const status = sessionStorage.getItem('status') || sessionStorage.setItem('status', 'false');

  return (
    <>
      <Router>
        <Routes>
          {status === 'true' ? (
            <>
              <Route path="home" element={<Home />} />
              <Route path="myReservations" element={<ReservationsPage />} />
              <Route path="newReservation" element={<NewReservation />} />
              <Route path="*" element={<Navigate to="home" replace />} />
            </>
          ) : (
            <>
              <Route path="/" element={<LandingPage />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </>
          )}
        </Routes>
      </Router>
    </>
  );
}

export default App;
