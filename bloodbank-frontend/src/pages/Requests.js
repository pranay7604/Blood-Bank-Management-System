import React, { useEffect, useState } from "react";
import axios from "axios";

function Requests() {

    const [requests, setRequests] = useState([]);

    const [hospitalId, setHospitalId] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [unitsRequired, setUnitsRequired] = useState("");

    useEffect(() => {
        loadRequests();
    }, []);

    const loadRequests = async () => {

        const result = await axios.get(
            "https://blood-bank-management-system-production-2572.up.railway.app/requests"
        );

        setRequests(result.data);
    };

    const saveRequest = async (e) => {

        e.preventDefault();

        const request = {
            hospitalId,
            bloodGroup,
            unitsRequired
        };

        await axios.post(
            "https://blood-bank-management-system-production-2572.up.railway.app/requests",
            request
        );

        setHospitalId("");
        setBloodGroup("");
        setUnitsRequired("");

        loadRequests();
    };

    const approveRequest = async (id) => {

        await axios.put(
            `https://blood-bank-management-system-production-2572.up.railway.app/requests/approve/${id}`
        );

        loadRequests();
    };

    const rejectRequest = async (id) => {

        await axios.put(
            `https://blood-bank-management-system-production-2572.up.railway.app/requests/reject/${id}`
        );

        loadRequests();
    };

    return (

        <div className="container mt-4">

            <h2>Blood Request Management</h2>

            <form onSubmit={saveRequest}>

                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Hospital ID"
                    value={hospitalId}
                    onChange={(e) =>
                        setHospitalId(e.target.value)
                    }
                    required
                />

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Blood Group"
                    value={bloodGroup}
                    onChange={(e) =>
                        setBloodGroup(e.target.value)
                    }
                    required
                />

                <input
                    type="number"
                    className="form-control mb-2"
                    placeholder="Units Required"
                    value={unitsRequired}
                    onChange={(e) =>
                        setUnitsRequired(e.target.value)
                    }
                    required
                />

                <button
                    className="btn btn-success"
                    type="submit"
                >
                    Create Request
                </button>

            </form>

            <hr />

            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                <tr>
                    <th>ID</th>
                    <th>Hospital ID</th>
                    <th>Blood Group</th>
                    <th>Units</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>

                </thead>

                <tbody>

                {requests.map((request) => (

                    <tr key={request.id}>

                        <td>{request.id}</td>

                        <td>{request.hospitalId}</td>

                        <td>{request.bloodGroup}</td>

                        <td>{request.unitsRequired}</td>

                        <td>

                            <span
                                className={
                                    request.status === "APPROVED"
                                        ? "badge bg-success"
                                        : request.status === "REJECTED"
                                        ? "badge bg-danger"
                                        : "badge bg-warning text-dark"
                                }
                            >
                                {request.status}
                            </span>

                        </td>

                        <td>

                            <button
                                className="btn btn-success btn-sm me-2"
                                onClick={() =>
                                    approveRequest(request.id)
                                }
                            >
                                Approve
                            </button>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() =>
                                    rejectRequest(request.id)
                                }
                            >
                                Reject
                            </button>

                        </td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>
    );
}

export default Requests;