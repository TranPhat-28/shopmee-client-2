import { Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import NavbarAdmin from "./NavbarAdmin";

const AdminApp = () => {
    return(
        <div className="admin-app">
            <NavbarAdmin />

            <Routes>
                <Route path="/" element={<div>Login to Admin Panel</div>} />
            </Routes>            
        </div>
    )
}

export default AdminApp;