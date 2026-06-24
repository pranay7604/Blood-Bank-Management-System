import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Donors from "./pages/Donors";
import Hospitals from "./pages/Hospitals";
import BloodStock from "./pages/BloodStock";
import Requests from "./pages/Requests";

import BloodAvailability from "./pages/BloodAvailability";
import RequestBlood from "./pages/RequestBlood";
import DonorRegistration from "./pages/DonorRegistration";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import PublicNavbar from "./components/PublicNavbar";
import ProtectedRoute from "./components/ProtectedRoute";

function Layout() {

    const location = useLocation();

    const adminRoutes = [
        "/admin/dashboard",
        "/admin/donors",
        "/admin/hospitals",
        "/admin/bloodstock",
        "/admin/requests"
    ];

    const isAdminRoute =
        adminRoutes.includes(location.pathname);

    return (
        <>
            {isAdminRoute ? <Navbar /> : <PublicNavbar />}

            <Routes>

                {/* Public Routes */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/blood-availability"
                    element={<BloodAvailability />}
                />

                <Route
                    path="/request-blood"
                    element={<RequestBlood />}
                />

                <Route
                    path="/donor-registration"
                    element={<DonorRegistration />}
                />

                {/* Admin Routes */}

                <Route
                    path="/admin/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/donors"
                    element={
                        <ProtectedRoute>
                            <Donors />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/hospitals"
                    element={
                        <ProtectedRoute>
                            <Hospitals />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/bloodstock"
                    element={
                        <ProtectedRoute>
                            <BloodStock />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/admin/requests"
                    element={
                        <ProtectedRoute>
                            <Requests />
                        </ProtectedRoute>
                    }
                />

            </Routes>
        </>
    );
}

function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;