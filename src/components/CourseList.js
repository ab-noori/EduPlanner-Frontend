/* eslint react/require-default-props: 0 */

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types'; // Import PropTypes
import { Link } from 'react-router-dom';

const CourseList = ({ courses }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/courses')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: 'SET_COURSES', payload: data });
      })
      .catch((error) => console.error('Error fetching courses:', error));
  }, [dispatch]);

  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <Link to={`/courses/${course.id}`}>{course.name}</Link>
        </li>
      ))}
    </ul>
  );
};

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default CourseList;
