import AuthenticationLoginForm from '../../shared/login_auth_form';
import '../../styles/auth.css';

const Login = () => (
  <div className="auth_holder">
    <h1 className="auth_header">Login</h1>
    <AuthenticationLoginForm buttonName="Login" />
    <section className="auth_links">
      <a href="/signup" className="loginlink link">
        Dont have an existing account..?
        <b>  Signup</b>
      </a>
    </section>
  </div>
);

export default Login;
