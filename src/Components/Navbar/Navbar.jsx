import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({user,logout}) {
  return (
    <><nav className="navbar navbar-expand-lg bg-dark ">
  <div className="container">
    <a className="navbar-brand text-white" href="#">Movies App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="">Home</Link>
      </li>
      <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="movies">Movies</Link>
      </li>
      {
            !user ?
            <>
          <li className="nav-item">
            <Link className="nav-link active text-white" aria-current="page" to="login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active text-white " aria-current="page" to="register">Register</Link>
          </li>
            
            </>:
          <li className="nav-item">
            <button className="btn btn-danger" aria-current="page" onClick={logout}>Logout</button>
          </li>

          }
     </ul>
    </div>
  </div>
</nav>
</>  )
}
