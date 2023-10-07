// components/CourseDetail.js

import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const CourseDetail = ({ match }) => {
  const courseId = match.params.id;
  const courses = useSelector((state) => state.courses);
  const course = courses.find((course) => course.id === parseInt(courseId, 10));

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
        <img src={course.image} alt={course.name} />
      </p>
    </div>
  );
};
/* eslint-disable react/require-default-props */
CourseDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};
/* eslint-enable react/require-default-props */

export default CourseDetail;
