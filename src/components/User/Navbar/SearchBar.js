import { useNavigate } from "react-router-dom";

const SearchBar = () => {

    const navigate = useNavigate();
    
    const handleSearch = (e) => {
        e.preventDefault();

        const name = document.getElementById('search');

        navigate('/search?name=' + name.value.replace(/\s+/g, '+'));

        // Clear the input
        name.value='';
    }

    return (
        <form className="d-flex ms-lg-5 mt-3 mt-lg-0" role="search" onSubmit={handleSearch}>
            <input className="form-control me-2" name="product-name" type="search" placeholder="Search for a product..." aria-label="Search" id="search"/>
            <button className="btn btn-outline-primary">Search</button>
        </form>
    );
}

export default SearchBar;