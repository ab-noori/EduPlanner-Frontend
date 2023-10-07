// components/CourseDetail.js

import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CourseDetail = ({ match }) => {
  const courseId = parseInt(match.params.id, 10);
  console.log(match);
  const courses = useSelector((state) => state.course.courses);
  console.log(courses);
  const course = courses.find((course) => course.id === courseId);
  console.log(course);

  if (!course) {
    return <div>Loading...</div>;
  }

  const handleReserveClick = () => {
    // Implement reservation logic here
    console.log(`Course ${course.name} reserved!`);
  };

  return (
    <div>
      <h2>{course.name}</h2>
      <p>
        Description:
        {' '}
        {course.description}
      </p>
      <p>
        Fee: $
        {course.fee}
      </p>
      <p>
        Start Date:
        {' '}
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

CourseDetail.defaultProps = {
  match: {
    params: {
      id: null,
    },
  },
};

CourseDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default CourseDetail;
