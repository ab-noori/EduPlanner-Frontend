import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:3000/api/courses/${id}`)
      .then((response) => response.json())
      .then((data) => setCourse(data))
      .catch((error) => console.error('Error fetching course:', error));
  }, [id]);

  const handleReserveClick = () => {
    console.log(`Course ${course.name} reserved!`);
    // Implement your reservation logic here
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <div>
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
      <p>
        Image:
        {' '}
        <img src={course.image} alt={course.name} />
      </p>
      <button type="button" onClick={handleReserveClick}>Reserve</button>
    </div>
  );
};

export default CourseDetail;
