import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";

const AddtoCart = (props) => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { stock } = props;

    return (
        <div>
        { !user && <button className="btn btn-primary" onClick={() => {navigate('/login')}}>Login now to buy this product</button> }

        { (user && (stock !== 0)) && (
            <div>
                <label forhtml="quantity" className="me-2">Quantity:</label>
                <input type="number" id="quantity" name="quantity" className="form-control w-25 d-inline" defaultValue="1" />
                <div className="container mt-3">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        )}

        { (user && (stock === 0)) && (
            <div className="container mt-3 p-3">
                <p style={{fontWeight: "bold", color: "red"}}>Out of stock</p>
            </div>
        )}
        </div>
    );
}

export default AddtoCart;