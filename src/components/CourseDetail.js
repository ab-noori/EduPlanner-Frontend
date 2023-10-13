import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingModal from '../shared/loading';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/courses/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data));
  }, [id]);

  const handleReserveClick = () => {
    const courseInfo = {
      id: course.id,
      name: course.name,
      startDate: course.startDate,
    };
    sessionStorage.setItem('reservableCourseInfo', JSON.stringify(courseInfo));

    setTimeout(() => {
      navigate('/new_reservation');
    }, 0.5);
  };

  if (!course) {
    return (
      <LoadingModal />
    );
  }

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="container-fluid pt-5">
          <div className="row">
            <div className="col-md-6 order-md-2 d-flex flex-column justify-content-center">
              <h2>{course.name}</h2>
              <p>
                Description:
                {course.description}
              </p>
              <p>
                Fee: $
                {course.fee}
              </p>
              <p>
                Start Date:
                {course.startDate}
              </p>
              <button type="button" className="btn btn-success custom-button" onClick={handleReserveClick}>Reserve</button>
            </div>
            <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center">
              <img src={course.image_url} alt={course.name} className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
