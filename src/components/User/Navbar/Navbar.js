import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import User from "./User";


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-dark p-3">
                <div className="container">
                    <Link className="navbar-brand" to='/'>ShopMee</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <SearchBar />
                        </ul>

                        <User />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;