import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourses, setCourses } from '../app/features/courseSlice';

const DeleteCoursePage = () => {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);
  const [deletedCourseIds, setDeletedCourseIds] = useState([]);

  useEffect(() => {
    // Fetch courses and set them in the component state
    fetch('http://127.0.0.1:3000/api/courses')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCourses(data));
      })
      .catch((error) => console.error('Error fetching courses:', error));
  }, [dispatch]);

  const handleDelete = (courseId) => {
    // Delete the course from the API
    fetch(`http://127.0.0.1:3000/api/courses/${courseId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        // Update the deleted courses in the component state
        setDeletedCourseIds([...deletedCourseIds, courseId]);
      })
      .catch((error) => console.error('Error deleting course:', error));
  };

  return (
    <div>
      <h1>Delete Course</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <h2>{course.name}</h2>
            {!deletedCourseIds.includes(course.id) && (
              <button type="button" onClick={() => handleDelete(course.id)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteCoursePage;
