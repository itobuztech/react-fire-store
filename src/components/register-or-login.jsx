import { Link } from 'react-router-dom';

export const RegisterOrLogin = ({pathname}) => {
  console.log({pathname});
  if (pathname === '/') {
    return (
      <p>
        <Link to="/register">
          register
        </Link>
      </p>
    )
  } else {
    return (
      <p>
        <Link to="/">
          login
        </Link>
      </p>
    )
  }
}
