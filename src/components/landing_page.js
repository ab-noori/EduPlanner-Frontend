import '../styles/landing.css';
import { useNavigate } from 'react-router-dom';
import PictureView from '../shared/picture_view';
import logo from '../assets/images/logo.png';
import displayImage1 from '../assets/images/image_display_1.jpg';
import displayImage2 from '../assets/images/image_display_2.jpeg';
import displayImage3 from '../assets/images/image_display_3.jpg';

function LandingPage() {
  const navigate = useNavigate();
  const landingViews = [
    { id: 1, image: displayImage1 },
    { id: 2, image: displayImage2 },
    { id: 3, image: displayImage3 },
  ];
  return (
    <div className="landing_page_holder">
      <div className="edu_logo_Holder">
        <img src={logo} alt="edu planner logo" className="edu_logo" />
      </div>

      <section className="auth_buttons">
        <button type="button" className="button login_button" onClick={() => navigate('login')}>Login</button>
        <button type="button" className="button signup_button" onClick={() => navigate('signup')}>Signup</button>
      </section>

      <section className="imagery">
        {landingViews.map((obj) => (
          <PictureView image={obj.image} key={obj.id} />
        ))}
      </section>
      <section className="footer">
        <div className="footer_info">
          <span>@Eduplanner corporations</span>
          <span>All rights reserved.</span>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
