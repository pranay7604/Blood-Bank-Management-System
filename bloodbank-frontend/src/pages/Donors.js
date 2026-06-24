import React, { useEffect, useState } from "react";
import axios from "axios";

function Donors() {

    const [donors, setDonors] = useState([]);

    const [donorName, setDonorName] = useState("");
    const [bloodGroup, setBloodGroup] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const [editId, setEditId] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        loadDonors();
    }, []);

    const loadDonors = async () => {
        const result = await axios.get(
            "http://localhost:8080/donors"
        );

        setDonors(result.data);
    };

    const saveDonor = async (e) => {

        e.preventDefault();

        const donor = {
            donorName,
            bloodGroup,
            phoneNumber
        };

        try {

            if (isEdit) {

                await axios.put(
                    `http://localhost:8080/donors/${editId}`,
                    donor
                );

                alert("Donor Updated Successfully");

            } else {

                await axios.post(
                    "http://localhost:8080/donors",
                    donor
                );

                alert("Donor Added Successfully");
            }

            setDonorName("");
            setBloodGroup("");
            setPhoneNumber("");

            setEditId(null);
            setIsEdit(false);

            loadDonors();

        } catch (error) {

            console.error(error);

            alert("Error Saving Donor");
        }
    };

    const deleteDonor = async (id) => {

        if (
            window.confirm(
                "Are you sure you want to delete this donor?"
            )
        ) {

            await axios.delete(
                `http://localhost:8080/donors/${id}`
            );

            loadDonors();
        }
    };

    const editDonor = (donor) => {

        setEditId(donor.id);

        setDonorName(donor.donorName);
        setBloodGroup(donor.bloodGroup);
        setPhoneNumber(donor.phoneNumber);

        setIsEdit(true);
    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">
                Donor Management
            </h2>

            <form onSubmit={saveDonor}>

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter Donor Name"
                    value={donorName}
                    onChange={(e) =>
                        setDonorName(e.target.value)
                    }
                    required
                />

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter Blood Group"
                    value={bloodGroup}
                    onChange={(e) =>
                        setBloodGroup(e.target.value)
                    }
                    required
                />

                <input
                    type="text"
                    className="form-control mb-2"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={(e) =>
                        setPhoneNumber(e.target.value)
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
                        ? "Update Donor"
                        : "Add Donor"}
                </button>

            </form>

            <hr />

            <table className="table table-bordered table-striped">

                <thead className="table-dark">

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Blood Group</th>
                    <th>Phone Number</th>
                    <th>Action</th>
                </tr>

                </thead>

                <tbody>

                {donors.map((donor) => (

                    <tr key={donor.id}>

                        <td>{donor.id}</td>

                        <td>{donor.donorName}</td>

                        <td>{donor.bloodGroup}</td>

                        <td>{donor.phoneNumber}</td>

                        <td>

                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() =>
                                    editDonor(donor)
                                }
                            >
                                Edit
                            </button>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() =>
                                    deleteDonor(donor.id)
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

export default Donors;