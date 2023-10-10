import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/courses/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      // eslint-disable-next-line
      .catch((error) => console.error('Error fetching course:', error));
  }, [id]);

  const handleReserveClick = () => {
    // eslint-disable-next-line
    console.log(`Course ${course.name} reserved!`);
    // Implement your reservation logic here
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container-fluid mt-4">
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
          <img src={course.image} alt={course.name} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
