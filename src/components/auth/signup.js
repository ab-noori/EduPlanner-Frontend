import AuthenticationForm from '../../shared/signup_auth_form';
import '../../styles/auth.css';

function Signup() {
  return (
    <div className="auth_holder">
      <h1 className="auth_header">Signup</h1>
      <AuthenticationForm buttonName="Signup" />
      <section className="auth_links">
        <a href="/login" className="loginlink link">
          Already have an account...
          <b>  login</b>
        </a>
      </section>
    </div>
  );
}

export default Signup;
