import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveReservs } from '../app/features/reservations/reservationsSlice';
import ReservationCard from '../shared/reservationCard';
import LoadingModal from '../shared/loading';
import '../styles/reservations.css';

function ReservationsPage() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.reservations.status);
  const allReservations = useSelector((state) => state.reservations.reservations);
  const userInfo = JSON.parse(sessionStorage.getItem('logged_user'));
  const userName = userInfo.name;

  useEffect(() => {
    dispatch(retrieveReservs());
  }, [dispatch]);

  return (
    <>
      {status === 'loading' ? (<LoadingModal />) : null}
      {allReservations === null ? (
        <div className="reservations_holder">
          <h1 className="reservationsHeader">Reservations Page</h1>
          <span className="ReservationsNotice">Empty Reservations</span>
        </div>
      ) : null }
      { allReservations !== null ? (
        <div className="reservations_holder">
          <h1 className="reservationsHeader">Reservations Page</h1>
          <span className="userReservNotice">
            {userName}
            &apos;s reservation
          </span>
          {allReservations.map((reservation) => (
            <>
              <ReservationCard reservation={reservation} key={reservation.id} />
            </>
          ))}
        </div>
      ) : null}
    </>
  );
}

export default ReservationsPage;
