/* eslint react/require-default-props: 0 */
// components/CourseList.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCourses, selectCourses } from '../app/features/courseSlice';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  console.log(courses);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/courses')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCourses(data)); // Use setCourses action creator
      })
      .catch((error) => console.error('Error fetching courses:', error));
  }, [dispatch]);

  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <Link to={`/courses/${course.id}`}>
            <button type="button">
              Reserve
              {course.name}
            </button>
            {' '}
            {/* Use "Reserve" button */}
          </Link>
        </li>
      ))}
    </ul>
  );
};

// CourseList.propTypes = {
//   courses: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//     }),
//   ),
// };

export default CourseList;
