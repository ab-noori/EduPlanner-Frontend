import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveCourses } from '../app/features/courses/coursesSlice';
import { retrieveReservs, createReservation } from '../app/features/reservations/reservationsSlice';
import LoadingModal from './loading';
import MessageModal from './messageModal';

function ReservationForm() {
  const reservableCourse = JSON.parse(sessionStorage.getItem('reservableCourseInfo')) || null;
  const [courseId, setCourseId] = useState(reservableCourse ? reservableCourse.id : '');
  const [cityInput, setCityInput] = useState('');
  const [dateInput, setDateInput] = useState(reservableCourse ? reservableCourse.startDate : null);
  const [newReservStatus, setNewReserveStatus] = useState('not Active');
  const [creationStatus, setCreationStatus] = useState('no status');
  const user = JSON.parse(sessionStorage.getItem('logged_user'));
  const Allcourses = useSelector((state) => state.courses.courses);
  const Allreservations = useSelector((state) => state.reservations.reservations);
  const status = useSelector((state) => state.courses.status);
  const dispatch = useDispatch();
  const isButtonDisabled = !dateInput || !cityInput || !courseId;
  let validationStatus = false;

  useEffect(() => {
    dispatch(retrieveCourses());
    dispatch(retrieveReservs());
  }, [dispatch]);

  const courseDependacies = (cId) => {
    if (Allcourses) {
      const chosenCourse = Allcourses.find((cs) => parseInt(cs.id, 10) === parseInt(cId, 10));
      setDateInput(chosenCourse.startDate);
    }
  };

  const handleCourseSelection = (e) => {
    sessionStorage.removeItem('reservableCourseInfo');

    const selectedCourseId = e.target.value;
    if (selectedCourseId) {
      setCourseId(selectedCourseId);
      courseDependacies(selectedCourseId);
    }
  };

  const newReservationValidation = (crsId, date) => {
    if (Allreservations.find((rsv) => parseInt(rsv.course.id, 10) === parseInt(crsId, 10))
        && Allreservations.find((rsv) => rsv.date === date)) {
      return false;
    }
    return true;
  };

  const userWarning = () => {
    setCreationStatus('reservation created');

    setTimeout(() => {
      setCreationStatus('no status');
    }, 3500);
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    setNewReserveStatus('Active');

    // assembling the new reservation
    const newReservation = {
      user_id: user.id,
      course_id: courseId,
      city: cityInput,
      date: dateInput,
    };

    // validating our new reservation
    const { date } = newReservation;
    const crsId = newReservation.course_id;
    validationStatus = newReservationValidation(crsId, date);

    // If new reservation indeed create new reservation
    if (validationStatus) {
      dispatch(createReservation(newReservation));
      userWarning();
    } else {
      setCreationStatus('reservation failed');

      setTimeout(() => {
        setCreationStatus('no status');
      }, 4500);
    }

    setCityInput('');
    setCourseId('');
    setDateInput(null);
    sessionStorage.removeItem('reservableCourseInfo');
  };

  return (
    <>
      {status === 'loading' || newReservStatus === 'active' ? (<LoadingModal />) : null}
      {creationStatus === 'reservation created' ? (<MessageModal message="Reservation created Succesfully !" />) : null}
      {creationStatus === 'reservation failed' ? (<MessageModal message="New Reservation for this Course not Created. One Already exists.." />) : null}
      <form action="" className="RForm" onSubmit={(e) => handleFormSubmission(e)}>
        <div className="formHandler">
          <section className="RFormSelectionFieldHolder">
            <div className="RFormInputHolder dropdown_R">
              <select
                name="course"
                id="course"
                onChange={(e) => {
                  handleCourseSelection(e);
                }}
                value={reservableCourse ? courseId : courseId || 'N/A'}
              >
                <option value="N/A" disabled>Choose a Course..</option>
                { Allcourses ? Allcourses.map((course) => (
                  <option key={course.id} value={course.id}>{course.name}</option>
                )) : (
                  <option value="N/A" disabled>No Courses Available</option>
                )}
              </select>
            </div>
            <div className="RFormInputHolder city_">
              <input type="text" value={cityInput} name="city" placeholder="where are you from?" className="reservationInput" onChange={(e) => setCityInput(e.target.value)} />
            </div>
            <div className="RFormInputHolder Date_R">
              <input type="text" disabled value={reservableCourse ? dateInput : dateInput || 'Course will Begin..'} className="reservationInput RFormRes" title="This is the Date When the course will begin, So set the calendar to not forget your reserved course When it takes place" />
            </div>
          </section>
          <section className="RButtonHolder">
            <button type="submit" className="reservationButton" disabled={isButtonDisabled}>Reserve A Spot</button>
          </section>
        </div>
      </form>
    </>
  );
}

export default ReservationForm;
