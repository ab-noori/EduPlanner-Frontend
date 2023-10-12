import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCourses, setCourses } from '../app/features/courseSlice';
import './DeleteCoursePage.css';

const DeleteCoursePage = () => {
  const dispatch = useDispatch();
  const courses = useSelector(selectCourses);

  useEffect(() => {
    fetch('http://127.0.0.1:3000/api/courses')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCourses(data));
      })
      .catch((error) => console.error('Error fetching courses:', error));
  }, [dispatch]);

  const handleDelete = async (courseId) => {
    try {
      const response = await fetch(`http://127.0.0.1:3000/api/courses/${courseId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete course');
      }

      // Fetch the updated courses after successful deletion
      fetch('http://127.0.0.1:3000/api/courses')
        .then((response) => response.json())
        .then((data) => {
          dispatch(setCourses(data));
        })
        .catch((error) => console.error('Error fetching courses:', error));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  return (
    <div id="delete_course_container">
      <h1>Delete Course Page</h1>
      <ul className="card_container">
        {courses.map((course) => (
          <li key={course.id} className="card">
            <img src={course.image_url} alt={course.name} className="img-fluid" />
            <h2 className="card_title">{course.name}</h2>
            <button type="button" onClick={() => handleDelete(course.id)} className="delete_button">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeleteCoursePage;
