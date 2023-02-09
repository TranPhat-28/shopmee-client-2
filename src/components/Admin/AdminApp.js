import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
import AddProduct from "./AddProducts";
import AddVoucher from "./AddVoucher";
import AdminLogin from "./AdminLogin";
import AllProducts from "./AllProducts";
import AllReport from "./AllReports";
import AllUsers from "./AllUsers";
import AllVouchers from "./AllVouchers";
import ConfirmedOrders from "./ConfirmedOrders";
import NavbarAdmin from "./NavbarAdmin";
import NavigationPanel from "./NavigationPanel";
import PendingOrders from "./PendingOrders";

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
                                <Route path="/addProduct" element={adminUser ? <AddProduct /> : <Navigate to='/admin' />} />

                                <Route path="/allVouchers" element={adminUser ? <AllVouchers /> : <Navigate to='/admin' />} />
                                <Route path="/addVoucher" element={adminUser ? <AddVoucher /> : <Navigate to='/admin' />} />

                                <Route path="/allUsers" element={adminUser ? <AllUsers /> : <Navigate to='/admin' />} />

                                <Route path="/report" element={adminUser ? <AllReport /> : <Navigate to='/admin' />} />

                                <Route path="/pendingOrders" element={adminUser ? <PendingOrders /> : <Navigate to='/admin' />} />
                                <Route path="/confirmedOrders" element={adminUser ? <ConfirmedOrders /> : <Navigate to='/admin' />} />
                            </Routes>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminApp;