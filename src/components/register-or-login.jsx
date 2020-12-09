import { Link } from 'react-router-dom';

export const RegisterOrLogin = ({ pathname }) => {
  if (pathname === '/login') {
    return (
      <p>
        <Link to="/register">
          Register
        </Link>
      </p>
    )
  } else {
    return (
      <p>
        <Link to="/login">
          Login
        </Link>
      </p>
    )
  }
}
