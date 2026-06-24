import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <section className="bg-danger text-white text-center py-5">
        <div className="container">
          <h1 className="display-5 fw-bold">Blood Bank Management System</h1>
          <p className="lead mb-4">
            Donate blood, save lives, and connect hospitals with lifesaving stock faster.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link className="btn btn-light btn-lg text-danger" to="/request-blood">
              Request Blood
            </Link>
            <Link className="btn btn-outline-light btn-lg" to="/donor-registration">
              Become a Donor
            </Link>
          </div>

          <p className="small opacity-75 mt-3">
            Trusted by hospitals and communities for safe, fast, and transparent blood support.
          </p>
        </div>
      </section>

      <section className="container mt-5">
        <div className="row gy-4">
          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <div className="mb-3 display-6">🩸</div>
                <h5 className="mb-3">Live Blood Availability</h5>
                <p className="text-muted">
                  Check available blood groups and stock levels in real time.
                </p>
                <Link className="btn btn-danger btn-sm" to="/blood-availability">
                  View Stock
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <div className="mb-3 display-6">📩</div>
                <h5 className="mb-3">Emergency Requests</h5>
                <p className="text-muted">
                  Submit urgent requests and get support from our trusted network.
                </p>
                <Link className="btn btn-danger btn-sm" to="/request-blood">
                  Request Now
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <div className="mb-3 display-6">❤️</div>
                <h5 className="mb-3">Become a Donor</h5>
                <p className="text-muted">
                  Join our community and help save lives with your donations.
                </p>
                <Link className="btn btn-danger btn-sm" to="/donor-registration">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5 mt-5">
        <div className="container">
          <div className="row text-center gy-4">
            <div className="col-md-4">
              <h2 className="display-6 fw-bold">1.5K+</h2>
              <p className="text-muted">Verified donors</p>
            </div>
            <div className="col-md-4">
              <h2 className="display-6 fw-bold">2.4K+</h2>
              <p className="text-muted">Blood units available</p>
            </div>
            <div className="col-md-4">
              <h2 className="display-6 fw-bold">1.2K+</h2>
              <p className="text-muted">Lives supported</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-4">
          <h2>How it Works</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: "640px" }}>
            A simple workflow for donors, hospitals, and patients to find, request, and receive lifesaving blood.
          </p>
        </div>

        <div className="row gy-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="badge bg-danger rounded-pill mb-3 px-3 py-2">1</div>
                <h5>Search Blood</h5>
                <p className="text-muted">
                  Browse available blood groups and nearby stock quickly.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="badge bg-danger rounded-pill mb-3 px-3 py-2">2</div>
                <h5>Submit Request</h5>
                <p className="text-muted">
                  Fill out your request details and share the need with our team.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <div className="badge bg-danger rounded-pill mb-3 px-3 py-2">3</div>
                <h5>Receive Support</h5>
                <p className="text-muted">
                  Coordinate delivery and care with hospital staff securely.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-5 mt-5">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-4">
              <h5 className="text-uppercase">Blood Bank</h5>
              <p className="small">
                Connecting donors, hospitals, and recipients with a safe and reliable blood management platform.
              </p>
            </div>

            <div className="col-md-4">
              <h5 className="text-uppercase">Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <Link className="text-white text-decoration-none" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-white text-decoration-none" to="/contact">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link className="text-white text-decoration-none" to="/blood-availability">
                    Blood Availability
                  </Link>
                </li>
                <li>
                  <Link className="text-white text-decoration-none" to="/request-blood">
                    Request Blood
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-md-4">
              <h5 className="text-uppercase">Contact</h5>
              <p className="small mb-1">support@bloodbank.local</p>
              <p className="small mb-1">+1 555-123-4567</p>
              <p className="small">123 Donation Ave, City</p>
            </div>
          </div>

          <div className="border-top border-secondary mt-4 pt-3">
            <p className="small mb-0 text-center">© 2026 Blood Bank Management System. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
