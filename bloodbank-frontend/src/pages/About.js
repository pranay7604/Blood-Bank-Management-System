import React from "react";

function About() {
    return (
        <div>

            <div className="bg-danger text-white text-center p-5">

                <h1>About Blood Bank Management System</h1>

                <p className="lead">Connecting donors, hospitals and recipients to save lives.</p>

            </div>

            <div className="container mt-5">

                <div className="row">

                    <div className="col-md-8">
                        <h3>Our Mission</h3>
                        <p>
                            We aim to build a reliable platform that makes blood donation
                            and transfusion services accessible, timely, and safe for
                            everyone in need.
                        </p>

                        <h3>What We Do</h3>
                        <ul>
                            <li>List and search available blood units by group and location.</li>
                            <li>Allow hospitals and patients to request blood in emergencies.</li>
                            <li>Maintain a registry of willing donors and their donation history.</li>
                        </ul>

                        <h3>Our Values</h3>
                        <p>
                            Safety, transparency, and community — we prioritize donor
                            wellbeing and accurate stock information so lifesaving blood
                            reaches recipients quickly.
                        </p>

                    </div>

                    <div className="col-md-4">
                        <div className="card shadow p-3">
                            <h5>Contact</h5>
                            <p className="mb-1"><strong>Email:</strong> mahajanpranay464@gmail.com</p>
                            <p className="mb-1"><strong>Phone:</strong> +91 6265783880</p>
                            <p className="mb-0"><strong>Address:</strong> 450445 Burhanpur, Madhya Pradesh</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default About;
