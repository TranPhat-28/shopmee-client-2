import { Link } from 'react-router-dom';

const User = () => {

    const user = null;


    // Will render User if user logged in
    return(
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {!user && <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/login' >Login</Link>
            </li>}

            {!user && <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/register' >Register</Link>
            </li>}

            {user && <li className="nav-item">
                <Link className="nav-link" aria-current="page" to='/login' >{user}</Link>
            </li>}
        </ul>
    );
}

export default User;