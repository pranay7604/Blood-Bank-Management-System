import React, { useEffect, useState } from "react";
import axios from "axios";

function BloodStock() {

    const [stocks, setStocks] = useState([]);

    const [bloodGroup, setBloodGroup] = useState("");
    const [units, setUnits] = useState("");

    const [editId, setEditId] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    useEffect(() => {
        loadStocks();
    }, []);

    const loadStocks = async () => {

        const result = await axios.get(
            "https://blood-bank-management-system-production-2572.up.railway.app/bloodstock"
        );

        setStocks(result.data);
    };

    const saveStock = async (e) => {

        e.preventDefault();

        const stock = {
            bloodGroup,
            units
        };

        try {

            if (isEdit) {

                await axios.put(
                    `https://blood-bank-management-system-production-2572.up.railway.app/bloodstock/${editId}`,
                    stock
                );

                alert("Blood Stock Updated");

            } else {

                await axios.post(
                    "https://blood-bank-management-system-production-2572.up.railway.app/bloodstock",
                    stock
                );

                alert("Blood Stock Added");
            }

            setBloodGroup("");
            setUnits("");

            setEditId(null);
            setIsEdit(false);

            loadStocks();

        } catch (error) {

            console.error(error);

            alert("Error Saving Blood Stock");
        }
    };

    const deleteStock = async (id) => {

        if (window.confirm("Delete this stock?")) {

            await axios.delete(
                `https://blood-bank-management-system-production-2572.up.railway.app/bloodstock/${id}`
            );

            loadStocks();
        }
    };

    const editStock = (stock) => {

        setEditId(stock.id);

        setBloodGroup(stock.bloodGroup);
        setUnits(stock.units);

        setIsEdit(true);
    };

    return (
        <div className="container mt-4">

            <h2>Blood Stock Management</h2>

            <form onSubmit={saveStock}>

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
                    placeholder="Units"
                    value={units}
                    onChange={(e) =>
                        setUnits(e.target.value)
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
                        ? "Update Stock"
                        : "Add Stock"}
                </button>

            </form>

            <hr />

            <table className="table table-bordered table-striped">

                <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Blood Group</th>
                    <th>Units</th>
                    <th>Action</th>
                </tr>
                </thead>

                <tbody>

                {stocks.map((stock) => (

                    <tr key={stock.id}>

                        <td>{stock.id}</td>

                        <td>{stock.bloodGroup}</td>

                        <td>{stock.units}</td>

                        <td>

                            <button
                                className="btn btn-warning btn-sm me-2"
                                onClick={() =>
                                    editStock(stock)
                                }
                            >
                                Edit
                            </button>

                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() =>
                                    deleteStock(stock.id)
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

export default BloodStock;