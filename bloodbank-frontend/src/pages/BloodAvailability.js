import React, { useState } from "react";
import axios from "axios";

function BloodAvailability() {

    const [bloodGroup, setBloodGroup] = useState("");
    const [stocks, setStocks] = useState([]);

    const searchBlood = async () => {

        try {
const response = await axios.get(
    `http://localhost:8080/bloodstock/search`,
    {
        params: {
            bloodGroup: bloodGroup
        }
    }
);

            setStocks(response.data);

        } catch (error) {

            console.error(error);

            alert("Search Failed");
        }
    };

    return (
        <div className="container mt-5">

            <h2 className="mb-4">
                Blood Availability Search 🩸
            </h2>

            <div className="row">

                <div className="col-md-4">

                    <select
                        className="form-control"
                        value={bloodGroup}
                        onChange={(e) =>
                            setBloodGroup(e.target.value)
                        }
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

                </div>

                <div className="col-md-2">

                    <button
                        className="btn btn-danger"
                        onClick={searchBlood}
                    >
                        Search
                    </button>

                </div>

            </div>

            <table className="table table-bordered mt-4">

                <thead className="table-dark">

                <tr>
                    <th>Blood Group</th>
                    <th>Units Available</th>
                </tr>

                </thead>

                <tbody>

                {stocks.map((stock) => (

                    <tr key={stock.id}>

                        <td>{stock.bloodGroup}</td>

                        <td>{stock.units}</td>

                    </tr>

                ))}

                </tbody>

            </table>

        </div>
    );
}

export default BloodAvailability;