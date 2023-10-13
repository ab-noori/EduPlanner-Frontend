import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveReservs } from '../app/features/reservations/reservationsSlice';
import ReservationCard from '../shared/reservationCard';
import LoadingModal from '../shared/loading';
import '../styles/reservations.css';

const ReservationsPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.reservations.status);
  const allReservations = useSelector((state) => state.reservations.reservations);

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
          <span className="ReservationsNotice">
            Your Course reservations
          </span>
          <div className="RCardsHolder">
            {allReservations.map((reservation) => (
              <div className="RCard" key={reservation.id}>
                <ReservationCard reservation={reservation} />
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ReservationsPage;
