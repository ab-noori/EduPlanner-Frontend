import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import MainPage from './components/main_page/MainPage';
import LandingPage from './components/landing_page';
import Login from './components/auth/login';
import Signup from './components/auth/signup';
import ReservationsPage from './components/reservations';
import NewReservation from './components/newReservation';
import CourseDetail from './components/CourseDetail';
import CourseForm from './components/course/courseForm';
import DeleteCoursePage from './components/DeleteCoursePage';
import Logout from './components/logout';
import SideBarHolder from './components/sidebar/sidebarholder';

const App = () => {
  const status = sessionStorage.getItem('status') || sessionStorage.setItem('status', 'false');

  return (
    <>
      <Router>
        {status === 'true' ? (
          <>
            <SideBarHolder />
            <Routes>
              <Route exact path="/" element={<MainPage />} />
              <Route path="/course-form" element={<CourseForm />} />
              <Route path="/my_reservations" element={<ReservationsPage />} />
              <Route path="/new_reservation" element={<NewReservation />} />
              <Route exact path="/logout" element={<Logout />} />
              <Route path="/courses/:id" element={<CourseDetail />} />
              <Route path="/delete-course" element={<DeleteCoursePage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </Router>
    </>
  );
};

export default App;
