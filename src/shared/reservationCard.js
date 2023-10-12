import React from 'react';
import PropTypes from 'prop-types';

const ReservationCard = ({ reservation }) => {
  const { date = 'Unknown Date', course = { description: 'Unknown Course' } } = reservation;
  const shortDesc = course.description.slice(0, 200);

  return (
    <>
      <a href={`/courses/${course.id}`}>
        <div className="ReservationhoverCard" />
      </a>
      <img src={course.image_url} alt={course.name} className="ReservationCourseImageView" />
      <section className="RInfoHolder">
        <section className="ReservationCourseInfo">
          <span className="RCourseName">{course.name}</span>
          <p className="RCourseShortDescription">
            {shortDesc}
            ...
          </p>
        </section>
        <section className="RCourseOtherInfo">
          <span className="ReservedCourseDate">
            starts On:
            <b className="RBold">
              {date}
            </b>
          </span>
        </section>
      </section>
    </>
  );
};

ReservationCard.propTypes = {
  reservation: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    course_id: PropTypes.number,
    city: PropTypes.string,
    date: PropTypes.string,
    created_at: PropTypes.string,
    updated_at: PropTypes.string,
    course: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      fee: PropTypes.string,
      startDate: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string,
    }),
  }).isRequired,
};

export default ReservationCard;
