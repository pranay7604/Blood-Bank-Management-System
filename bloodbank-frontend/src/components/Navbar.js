import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const logout = () => {

        localStorage.removeItem("token");

        window.location.href = "/login";
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger shadow">

            <div className="container">

                <Link
                    className="navbar-brand fw-bold"
                    to="/admin/dashboard"
                >
                    🩸 Blood Bank Admin
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/admin/dashboard"
                            >
                                Dashboard
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/admin/donors"
                            >
                                Donors
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/admin/hospitals"
                            >
                                Hospitals
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/admin/bloodstock"
                            >
                                Blood Stock
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/admin/requests"
                            >
                                Requests
                            </Link>
                        </li>

                        <li className="nav-item ms-3">
                            <button
                                className="btn btn-light btn-sm"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </li>

                    </ul>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;