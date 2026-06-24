import React, { useEffect, useState } from "react";
import axios from "axios";

function Hospitals() {

    const [hospitals, setHospitals] = useState([]);

    const [hospitalName, setHospitalName] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");

    const [editId, setEditId] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        loadHospitals();
    }, []);

    const loadHospitals = async () => {

        const result = await axios.get(
            "http://localhost:8080/hospitals"
        );

        setHospitals(result.data);
    };

    const saveHospital = async (e) => {

        e.preventDefault();

        const hospital = {
            hospitalName,
            contact,
            address
        };

        try {

            if (isEdit) {

                await axios.put(
                    `http://localhost:8080/hospitals/${editId}`,
                    hospital
                );

                alert("Hospital Updated Successfully");

            } else {

                await axios.post(
                    "http://localhost:8080/hospitals",
                    hospital
                );

                alert("Hospital Added Successfully");
            }

            setHospitalName("");
            setContact("");
            setAddress("");

            setEditId(null);
            setIsEdit(false);

            loadHospitals();

        } catch (error) {

            console.error(error);

            alert("Error Saving Hospital");
        }
    };

    const deleteHospital = async (id) => {

        if (
            window.confirm(
                "Are you sure you want to delete this hospital?"
            )
        ) {

            await axios.delete(
                `http://localhost:8080/hospitals/${id}`
            );

            loadHospitals();
        }
    };

    const editHospital = (hospital) => {

        setEditId(hospital.id);

        setHospitalName(hospital.hospitalName);
        setContact(hospital.contact);
        setAddress(hospital.address);

        setIsEdit(true);
    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">
                Hospital Management
            </h2>

            <form onSubmit={saveHospital}>

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Hospital Name"
                    value={hospitalName}
                    onChange={(e) =>
                        setHospitalName(e.target.value)
                    }
                    required
                />

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Contact Number"
                    value={contact}
                    onChange={(e) =>
                        setContact(e.target.value)
                    }
                    required
                />

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Address"
                    value={address}
                    onChange={(e) =>
                        setAddress(e.target.value)
                    }
                    required
                />

                <button
                    type="submit"
                    className={
                        isEdit
                            ? "btn btn-warning"
                            : "btn btn-success"
                    }
                >
                    {isEdit
                        ? "Update Hospital"
                        : "Add Hospital"}
                </button>

            </form>

            <hr />

            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                <tr>
                    <th>ID</th>
                    <th>Hospital Name</th>
                    <th>Contact</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>

                </thead>

                <tbody>

                {hospitals.map((hospital) => (

                    <tr key={hospital.id}>

                        <td>{hospital.id}</td>

                        <td>{hospital.hospitalName}</td>

                        <td>{hospital.contact}</td>

                        <td>{hospital.address}</td>

                        <td>

                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() =>
                                    editHospital(hospital)
                                }
                            >
                                Edit
                            </button>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() =>
                                    deleteHospital(hospital.id)
                                }
                            >
                                Delete
                            </button>

                        </td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>
    );
}

export default Hospitals;