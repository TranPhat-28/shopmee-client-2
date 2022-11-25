import { Link } from "react-router-dom";

const Login = () => {
    return(
        <div className="container d-flex justify-content-center">
            <div className="jumbotron p-3">
                <form action="" method="" className="d-flex flex-column">
                    <h2 className="mb-4">Login into your account</h2>

                    <label for="email" className="form-label m-1">Email</label>
                    <input type="email" name="email" className="form-control" />
                    <br></br>

                    <label for="password" className="form-label m-1">Password</label>
                    <input type="password" name="password" className="form-control" />
                    <br></br>

                    <input type="submit" className="btn btn-primary" value="Login" />
                    <br></br>

                    <Link to='/register' id="switch" className="form-text text-center" >Don't have an account yet? Register now.</Link>
                </form>
            </div>
        </div>
    );
}

export default Login;