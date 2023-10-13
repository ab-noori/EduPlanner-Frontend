import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import LoadingModal from '../shared/loading';
import '../styles/CourseDetail.css';

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://edu-planner-backend.onrender.com/api/courses/${id}`)
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
    <>
      <div className="CourseHolder">
        <div className="CourseDetailsPageDivider">
          <div className="CourseDetailsImageHolder">
            <img src={course.image_url} alt={course.name} className="CourseDetailsImage" />
          </div>
          <div className="CourseDetailsInfoHolder">
            <h2 className="courseDetailsName">{course.name}</h2>
            <section className="CourseDetailsTextInfo">
              <p className="courseDetailsParagragh">
                <b>Description:</b>
                <span>{course.description}</span>
              </p>
              <p className="courseDetailsFee">
                <b>Fee:</b>
                <span>
                  $
                  {course.fee}
                </span>
              </p>
              <p className="courseDetailsDate">
                <b>StartDate:</b>
                <span>{course.startDate}</span>
              </p>
            </section>
            <button type="button" className="custom-button" onClick={handleReserveClick}>Reserve</button>
          </div>
        </div>
      </div>
      <div className="BlurImageDetails">
        <img src={course.image_url} alt="blur" className="BlurImage" />
      </div>
    </>
  );
};

export default CourseDetail;
