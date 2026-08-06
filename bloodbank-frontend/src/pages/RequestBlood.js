import React, { useState } from "react";
import axios from "axios";

function RequestBlood() {

    const [hospitalId, setHospitalId] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [unitsRequired, setUnitsRequired] = useState("");

    const submitRequest = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                "https://blood-bank-management-system-production-2572.up.railway.app/requests",
                {
                    hospitalId,
                    bloodGroup,
                    unitsRequired
                }
            );

            alert("Blood Request Submitted Successfully");

            setHospitalId("");
            setBloodGroup("");
            setUnitsRequired("");

        } catch (error) {

            console.error(error);

            alert("Request Failed");
        }
    };

    return (
        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            Request Blood 🩸
                        </h2>

                        <form onSubmit={submitRequest}>

                            <input
                                type="number"
                                className="form-control mb-3"
                                placeholder="Hospital ID"
                                value={hospitalId}
                                onChange={(e) =>
                                    setHospitalId(e.target.value)
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
                                type="number"
                                className="form-control mb-3"
                                placeholder="Units Required"
                                value={unitsRequired}
                                onChange={(e) =>
                                    setUnitsRequired(e.target.value)
                                }
                                required
                            />

                            <button
                                className="btn btn-danger w-100"
                            >
                                Submit Request
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default RequestBlood;