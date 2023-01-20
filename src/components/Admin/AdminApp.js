import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
import AdminLogin from "./AdminLogin";
import AllProducts from "./AllProducts";
import NavbarAdmin from "./NavbarAdmin";
import NavigationPanel from "./NavigationPanel";

const AdminApp = () => {

    const { adminUser } = useContext(AdminAuthContext);

    return (
        <div className="admin-app">
            <NavbarAdmin />
            

            <div className="container mt-3">
                <div className="row">
                    { adminUser && <NavigationPanel />}

                    <div className={ adminUser ? "col-sm-12 col-md-8 p-3" : "col-12 p-3"} >
                        <div className="container border rounded p-3">
                            <Routes>
                                <Route path="/" element={adminUser ? <Navigate to='/admin/products' /> : <AdminLogin />} />

                                <Route path="/allProducts" element={adminUser ? <AllProducts /> : <Navigate to='/admin' />} />
                            </Routes>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminApp;
//<Route path="/products" element={adminUser ? <div>View all active products on the website</div> : <Navigate to='/admin' />} />