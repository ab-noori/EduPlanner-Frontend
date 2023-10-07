import PropTypes from 'prop-types';

function ReservationCard({ reservation }) {
  const { city = 'Unknown City', date = 'Unknown Date', course = 'Unknown Course' } = reservation;
  const shortDesc = course.description.slice(0, 200);
  return (
    <div className="ClassHolder">
      <div className="ReservationhoverCard" />
      <img src={course.image} alt="ReservationView" className="ReservationCourseImageView" />
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
          {date}
        </span>
        <span className="CourseLocation">
          reserved from:
          {city}
        </span>
      </section>
    </div>
  );
}

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
