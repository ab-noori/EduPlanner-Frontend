import '../styles/landing.css';
import { useNavigate } from 'react-router-dom';
import PictureView from '../shared/picture_view';
import logo from '../assets/images/logo.png';
import displayImage1 from '../assets/images/image_display_1.jpg';
import displayImage2 from '../assets/images/image_display_2.jpeg';
import displayImage3 from '../assets/images/image_display_3.jpg';

const LandingPage = () => {
  const navigate = useNavigate();
  const landingViews = [
    {
      id: 1, image: displayImage1, header: 'Efficient Course Booking', description: 'Eduplanner simplifies course booking, allowing students to quickly and efficiently register for the courses they need. By providing a user-friendly interface and intuitive navigation, Eduplanner minimizes the time spent on administrative tasks, enabling students to focus on their studies.',
    },
    {
      id: 2, image: displayImage2, header: 'Personalized Learning Experience', description: 'Eduplanner leverages advanced algorithms to deliver a personalized learning experience. By analyzing your academic history, preferences, and learning style, Eduplanner recommends courses that align with your goals. This tailored approach helps you make informed decisions about your educational journey.',
    },
    {
      id: 3, image: displayImage3, header: 'Real-time Updates and Notifications', description: 'Stay informed and connected with Eduplanner\'s real-time updates and notifications. Receive timely information about course changes, upcoming events, and assignment deadlines. With push notifications and email alerts, you\'ll never miss important updates, ensuring a seamless learning experience.',
    },
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
          <PictureView
            image={obj.image}
            title={obj.header}
            description={obj.description}
            key={obj.id}
          />
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
};

export default LandingPage;
