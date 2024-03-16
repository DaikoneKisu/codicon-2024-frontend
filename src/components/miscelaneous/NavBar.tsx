import { Link } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </nav>
  )
}
