import { Link } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import OptionA from "./OptionA";
import OptionB from "./OptionB";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark p-3">
                <div className="container">
                    <a className="navbar-brand">ShopMee</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/' >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/OptionA' >Option A</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to='/OptionB' >Option B</Link>
                            </li>
                        </ul>

                        <User />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;