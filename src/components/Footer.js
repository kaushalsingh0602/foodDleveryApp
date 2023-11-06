import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
        <footer className="row row-cols-5 py-5 my-5 border-top">
    <div className="col">
      <Link to="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
        {/* <svg className="bi me-2" width="40" height="32"><use xlink:to="/bootstrap"></use></svg> */}
      </Link>
      <p className="text-muted">© 2021 GoFood</p>
    </div>

    <div className="col">

    </div>

    <div className="col">
      <h5>Company</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>

    <div className="col">
      <h5>Contact Us</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>

    <div className="col">
      <h5>We deliver to:</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
        <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
      </ul>
    </div>
  </footer>
    </div>
  )
}
