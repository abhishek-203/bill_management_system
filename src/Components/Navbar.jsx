import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      {/* <!-- Start Header/Navigation --> */}
      <nav className="custom-navbar navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">

        <div className="container">
          <Link className="navbar-brand text-success fw-bolder fst-italic" to="/">foody<span>.</span></Link>
         
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

      </nav>
      {/* <!-- End Header/Navigation --> */}

    </>
  )
}
