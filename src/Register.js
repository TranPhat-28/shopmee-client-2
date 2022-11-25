import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="jumbotron p-3">
                <form action="" method="" className="d-flex flex-column">
                    <h2 class="mb-4">Register a new account</h2>

                    <label for="email" class="form-label m-1">Email</label>
                    <input type="email" name="email" class="form-control" required />
                    <br></br>

                    <label for="password" class="form-label m-1">Password</label>
                    <input type="password" name="password" class="form-control" required />
                    <br></br>

                    <label for="confirm" class="form-label m-1">Confirm password</label>
                    <input type="password" name="confirm" class="form-control" required />
                    <br></br>

                    <label for="phone" class="form-label m-1">Phone number</label>
                    <input type="number" name="phone" class="form-control" required />
                    <br></br>

                    <label for="address" class="form-label m-1">Address</label>
                    <input type="text" name="address" class="form-control" required />
                    <br></br>

                    <input type="submit" class="btn btn-primary" id="submit" value="Register" />
                    <br></br>

                    <Link to='/register' id="switch" className="form-text text-center" >Have an account already? Login now.</Link>
                </form>
            </div>
        </div>
    );
}

export default Register;