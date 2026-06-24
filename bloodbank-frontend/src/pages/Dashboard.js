import React, { useEffect, useState } from "react";
import axios from "axios";

import {
    BarChart,
    Bar,
    PieChart,
    Pie,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend
} from "recharts";

function Dashboard() {

    const [data, setData] = useState({
        totalDonors: 0,
        totalHospitals: 0,
        totalRequests: 0,
        totalBloodStock: 0
    });

    const [bloodStockData, setBloodStockData] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:8080/dashboard")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

        axios
            .get("http://localhost:8080/bloodstock/chart")
            .then((response) => {
                setBloodStockData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);

    const chartData = [
        {
            name: "Donors",
            value: data.totalDonors
        },
        {
            name: "Hospitals",
            value: data.totalHospitals
        },
        {
            name: "Requests",
            value: data.totalRequests
        },
        {
            name: "Blood Stock",
            value: data.totalBloodStock
        }
    ];

    const COLORS = [
        "#dc3545",
        "#0d6efd",
        "#198754",
        "#ffc107",
        "#6f42c1",
        "#20c997",
        "#fd7e14",
        "#6610f2"
    ];

    return (
        <div className="container mt-4">

            <h1 className="text-center mb-4 fw-bold">
                🩸 Blood Bank Dashboard
            </h1>

            <div className="row g-4">

                <div className="col-md-3">
                    <div className="card shadow border-0 text-center p-3">
                        <h5>Total Donors</h5>
                        <h2 className="text-danger">
                            {data.totalDonors}
                        </h2>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow border-0 text-center p-3">
                        <h5>Total Hospitals</h5>
                        <h2 className="text-primary">
                            {data.totalHospitals}
                        </h2>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow border-0 text-center p-3">
                        <h5>Total Requests</h5>
                        <h2 className="text-warning">
                            {data.totalRequests}
                        </h2>
                    </div>
                </div>

                <div className="col-md-3">
                    <div className="card shadow border-0 text-center p-3">
                        <h5>Blood Groups</h5>
                        <h2 className="text-success">
                            {data.totalBloodStock}
                        </h2>
                    </div>
                </div>

            </div>

            <div className="card shadow border-0 mt-5 p-4">

                <h3 className="mb-4">
                    📊 System Overview
                </h3>

                <ResponsiveContainer
                    width="100%"
                    height={350}
                >

                    <BarChart data={chartData}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />

                        <XAxis dataKey="name" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="value"
                            fill="#dc3545"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

            <div className="card shadow border-0 mt-5 p-4">

                <h3 className="mb-4">
                    🩸 Blood Group Distribution
                </h3>

                <ResponsiveContainer
                    width="100%"
                    height={400}
                >

                    <PieChart>

                        <Pie
                            data={bloodStockData}
                            dataKey="units"
                            nameKey="bloodGroup"
                            cx="50%"
                            cy="50%"
                            outerRadius={130}
                            label
                        >

                            {bloodStockData.map(
                                (entry, index) => (
                                    <Cell
                                        key={index}
                                        fill={
                                            COLORS[
                                            index %
                                            COLORS.length
                                            ]
                                        }
                                    />
                                )
                            )}

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    );
}

export default Dashboard;