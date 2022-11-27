import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = document.getElementsByName("email")[0].value;
        const password = document.getElementsByName("password")[0].value;
        
        fetch('/login', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })
        .then(res => { 
            return res.json()
        })
        .then(data => {
            /*
            if (data === "OK") {
                toast.success("Registration success!");
                setTimeout(() => {
                    navigate('/login');
                }, 1500)
            }
            else{
                toast.error(data);
            }
            */
        })
        .catch(e => { 
            //console.log(e.message);
            toast.error(e.message);
        })
    }


    return(
        <div className="container d-flex justify-content-center">
            <div className="jumbotron p-3">
                <form onSubmit={handleSubmit} className="d-flex flex-column">
                    <h2 className="mb-4">Login into your account</h2>

                    <label htmlFor="email" className="form-label m-1">Email</label>
                    <input type="email" name="email" className="form-control mb-3" required />

                    <label htmlFor="password" className="form-label m-1">Password</label>
                    <input type="password" name="password" className="form-control mb-3" required />

                    <button className="btn btn-primary mb-3">Login</button>

                    <Link to='/register' id="switch" className="form-text text-center" >Don't have an account yet? Register now.</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;