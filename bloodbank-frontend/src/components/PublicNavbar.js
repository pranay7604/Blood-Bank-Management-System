import React from "react";
import { Link } from "react-router-dom";

function PublicNavbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">

            <div className="container">

                <Link className="navbar-brand" to="/">
                    🩸 Blood Bank
                </Link>

                <div className="navbar-nav ms-auto">

                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    <Link className="nav-link" to="/about">
                        About
                    </Link>

                    <Link
                        className="nav-link"
                        to="/blood-availability"
                    >
                        Blood Availability
                    </Link>

                    <Link
                        className="nav-link"
                        to="/request-blood"
                    >
                        Request Blood
                    </Link>

                    <Link
                        className="nav-link"
                        to="/donor-registration"
                    >
                        Become Donor
                    </Link>

                    <Link
                        className="nav-link"
                        to="/login"
                    >
                        Admin Login
                    </Link>

                </div>

            </div>

        </nav>
    );
}

export default PublicNavbar;