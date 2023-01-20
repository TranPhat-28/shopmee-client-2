import { useContext } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {

    const { setAdminUser } = useContext(AdminAuthContext);
    const navigate = useNavigate();

    const adminLogin = (email, password) => {
        fetch('/admin/adminLogin', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
            .then(res => {
                //if (!res.ok) {throw Error("Something went wrong")}
                return res.json()
            })
            .then(data => {
                if (data.email) {
                    toast.success("Login success");
                    // Set AdminAuthContext data
                    setAdminUser(data);
                    // Set LocalStorage
                    localStorage.setItem('adminUser', JSON.stringify(data))
                    navigate('/admin/allProducts');
                }
                else {
                    toast.error(data);
                }
            })
            .catch(e => {
                console.log(e.message);
                toast.error("Something went wrong");
            })
    }


    const handleLogin = async (e) => {
        e.preventDefault();

        const email = document.getElementsByName("email")[0].value;
        const password = document.getElementsByName("password")[0].value;

        await adminLogin(email, password);

        document.getElementsByName("email")[0].value = '';
        document.getElementsByName("password")[0].value = '';
    }

    return (
        <div className="container d-flex justify-content-center form-container">
            <div className="jumbotron p-3">
                <form className="d-flex flex-column" onSubmit={handleLogin}>
                    <h2 className="mb-4">Administrator Login</h2>

                    <label htmlFor="email" className="form-label m-1">Email</label>
                    <input type="email" name="email" className="form-control mb-3" required />

                    <label htmlFor="password" className="form-label m-1">Password</label>
                    <input type="password" name="password" className="form-control mb-3" required />

                    <button className="btn btn-primary mb-3">Login</button>
                </form>
            </div>
        </div>
    );
}

export default AdminLogin;