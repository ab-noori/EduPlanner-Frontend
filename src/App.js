import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainPage from './components/MainPage';
import LandingPage from './components/landing_page';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import ReservationsPage from './components/reservations';
import NewReservation from './components/newReservation';

function App() {
  const status = sessionStorage.getItem('status') || sessionStorage.setItem('status', 'false');

  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <Routes>
            {status === 'true' ? (
              <>
                <Route exact path="/" element={<MainPage />} />
                <Route path="my_reservations" element={<ReservationsPage />} />
                <Route path="new_reservation" element={<NewReservation />} />
                <Route path="*" element={<Navigate to="/" replace />} />
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
      </div>
    </div>
  );
}

export default App;
