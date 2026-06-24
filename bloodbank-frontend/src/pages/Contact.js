import React from "react";

function Contact() {
    return (
        <div>
            <div className="bg-danger text-white text-center p-5">
                <h1>Contact Us</h1>
                <p className="lead">We are here to help with blood donation and emergency requests.</p>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Send a Message</h3>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Your name" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="your@email.com" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Message</label>
                                <textarea className="form-control" rows="5" placeholder="How can we help?"></textarea>
                            </div>
                            <button type="submit" className="btn btn-danger">
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="col-md-6">
                        <div className="card shadow p-4">
                            <h3>Contact Details</h3>
                            <p className="mb-2"><strong>Email:</strong> mahajanpranay464@gmail.com</p>
                            <p className="mb-2"><strong>Phone:</strong> +91 6265783880</p>
                            <p className="mb-2"><strong>Address:</strong> 450445 Burhanpur, Madhya Pradesh</p>
                            <p><strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
