import React, { useState } from "react";
import axios from "axios";

function DonorRegistration() {

    const [donorName, setDonorName] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const registerDonor = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "https://blood-bank-management-system-production-2572.up.railway.app/donors",
                {
                    donorName,
                    bloodGroup,
                    phoneNumber
                }
            );

            alert("Donor Registered Successfully");

            setDonorName("");
            setBloodGroup("");
            setPhoneNumber("");

        } catch (error) {

            console.error(error);

            alert("Registration Failed");
        }
    };

    return (
        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            Become a Blood Donor 🩸
                        </h2>

                        <form onSubmit={registerDonor}>

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter Name"
                                value={donorName}
                                onChange={(e) =>
                                    setDonorName(e.target.value)
                                }
                                required
                            />

                            <select
                                className="form-control mb-3"
                                value={bloodGroup}
                                onChange={(e) =>
                                    setBloodGroup(e.target.value)
                                }
                                required
                            >
                                <option value="">
                                    Select Blood Group
                                </option>

                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>

                            </select>

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Enter Phone Number"
                                value={phoneNumber}
                                onChange={(e) =>
                                    setPhoneNumber(e.target.value)
                                }
                                required
                            />

                            <button
                                className="btn btn-danger w-100"
                            >
                                Register
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default DonorRegistration;