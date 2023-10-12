import ReservationForm from '../shared/reservationsForm';
import imageBackground from '../assets/images/reservation_background.jpg';

function NewReservation() {
  return (
    <>
      <div className="RPageBackgroundHolder">
        <div className="backgroundOverlayColor" />
        <img src={imageBackground} alt="reservations background" className="Image" />
      </div>
      <div className="RFormHeader">Make A Course reservation</div>
      <p className="RPageDescription">
        Eduplanner is comprehensive web service designed for scheduling online classes and courses,
        stands as an invaluable tool for efficient academic organization.
        The platform not only simplifies the complexities of scheduling
        but enhances the overall learning experience.
      </p>
      <ReservationForm />
    </>
  );
}

export default NewReservation;
