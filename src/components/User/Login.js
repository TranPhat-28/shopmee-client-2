import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {

    const { login } = useLogin();

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = document.getElementsByName("email")[0].value;
        const password = document.getElementsByName("password")[0].value;

        await login(email, password);

        document.getElementsByName("email")[0].value = '';
        document.getElementsByName("password")[0].value = '';
    }

    return (
        <div className="container d-flex justify-content-center form-container">
            <div className="jumbotron p-3">
                <form className="d-flex flex-column" onSubmit={handleLogin}>
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