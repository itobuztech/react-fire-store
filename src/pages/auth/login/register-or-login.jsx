import { Link } from 'react-router-dom';

export const RegisterOrLogin = ({ pathname }) => {
  if (pathname === '/login') {
    return (
      <p className="login__submit-buttons">
        <Link to="/register">
          Register
        </Link>
      </p>
    )
  } else {
    return (
      <p className="login__submit-buttons">
        <Link to="/login">
          Login
        </Link>
      </p>
    )
  }
}
