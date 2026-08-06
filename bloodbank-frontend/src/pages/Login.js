import React, { useState } from "react";
import axios from "axios";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "https://blood-bank-management-system-production-2572.up.railway.app/auth/login",
                {
                    username,
                    password
                }
            );

            localStorage.setItem(
                "token",
                response.data.token
            );

            alert("Login Successful");

           window.location.href ="/admin/dashboard";

        } catch (error) {

            alert("Invalid Username or Password");
        }
    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-4">

                    <div className="card shadow p-4">

                        <h2 className="text-center mb-4">
                            Admin Login
                        </h2>

                        <form onSubmit={login}>

                            <input
                                className="form-control mb-3"
                                placeholder="Username"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                            />

                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                            />

                            <button
                                className="btn btn-danger w-100"
                            >
                                Login
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Login;