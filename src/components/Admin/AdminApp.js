import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
import AdminLogin from "./AdminLogin";
import AllProducts from "./AllProducts";
import NavbarAdmin from "./NavbarAdmin";

const AdminApp = () => {

    const { adminUser } = useContext(AdminAuthContext);

    return (
        <div className="admin-app">

            <NavbarAdmin />

            <Routes>
                <Route path="/" element={adminUser ? <Navigate to='/admin/products' /> : <AdminLogin />} />

                <Route path="/products" element={adminUser ? <AllProducts /> : <Navigate to='/admin' />} />
            </Routes>

        </div>
    )
}

export default AdminApp;
//<Route path="/products" element={adminUser ? <div>View all active products on the website</div> : <Navigate to='/admin' />} />