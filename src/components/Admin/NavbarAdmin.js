import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";

const NavbarAdmin = () => {

    const { adminUser, setAdminUser } = useContext(AdminAuthContext);

    const navigate = useNavigate();

    const adminLogout = () => {
        // Remove from local storage
        localStorage.removeItem('adminUser');
        // Remove from Context
        setAdminUser(null);
        navigate('/admin');
        toast.success('Logout success');
    }

    return(
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark p-3">
                <div className="container">
                    <a className="navbar-brand">ShopMee</a>
                    { adminUser && <button className="btn btn-outline-secondary" onClick={adminLogout}>Logout</button>}
                </div>
            </nav>
        </div>
    )
}

export default NavbarAdmin;