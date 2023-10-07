// App.js

import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Update the import
import CourseList from './components/CourseList';
import CourseDetail from './components/CourseDetail';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>EduPlanner Frontend!</p>
      </header>
      <Routes>
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/courses" element={<CourseList />} />
      </Routes>
    </div>
  );
}

export default App;
