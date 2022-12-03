import { Route, Routes } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import NavbarAdmin from "./NavbarAdmin";

const AdminApp = () => {
    return(
        <div className="admin-app">
            <NavbarAdmin />

            <Routes>
                <Route path="/" element={<AdminLogin />} />
                <Route path="/addProduct" element={<div>Add a new Product</div>} />
            </Routes>            
        </div>
    )
}

export default AdminApp;