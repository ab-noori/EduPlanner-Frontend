/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createCourse } from '../../app/features/courses/courseFormSlice';
import './CourseForm.css';

const CourseForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState({
    name: '',
    fee: '',
    startDate: '',
    image: null,
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the value is a positive number before updating the state
    if (name === 'fee' && !Number.isNaN(parseFloat(value)) && parseFloat(value) >= 0) {
      setCourseData({ ...courseData, [name]: value });
    } else if (name !== 'fee') {
      setCourseData({ ...courseData, [name]: value });
    }
  };

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setCourseData({ ...courseData, image: imageFile });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createCourse(courseData))
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        throw new Error('Error creating course:', error.message);
      });
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container pt-4">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card form-container shadow">
                <div className="card-header">
                  <h2 className="card-title text-center mb-1">Create a New Course</h2>
                </div>
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-1">
                      <label htmlFor="name" className="form-label">Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        value={courseData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="fee" className="form-label">Fee:</label>
                      <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input
                          type="number"
                          className="form-control"
                          name="fee"
                          id="fee"
                          value={courseData.fee}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-1">
                      <label htmlFor="startDate" className="form-label">Start Date:</label>
                      <input
                        type="date"
                        className="form-control"
                        name="startDate"
                        id="startDate"
                        value={courseData.startDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="image" className="form-label">Image:</label>
                      <input
                        type="file"
                        className="form-control"
                        name="image"
                        id="image"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                    <div className="mb-1">
                      <label htmlFor="description" className="form-label">Description:</label>
                      <textarea
                        className="form-control"
                        name="description"
                        id="description"
                        value={courseData.description}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="text-center mb-4">
                      <button type="submit" className="btn btn-success">Create Course</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseForm;
