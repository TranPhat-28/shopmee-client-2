import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";

const AddtoCart = (props) => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { stock } = props;
    const { id } = useParams();

    const addtoCart = () => {

        const quantity = document.getElementById('quantity').value;
        // Check quantity
        if (quantity <= 0){
            toast.error('Invalid quantity number');            
        }
        else{
            // Perform fetch
            fetch('https://shopmee-server-2.onrender.com/addtoCart', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`,
                },
                body: JSON.stringify({
                    user: user.email,
                    id: id,
                    quantity: quantity
                })
            }).then(res => {
                if ( !res.ok ) { throw "Error validating user. Try login again!" }
                return res.json();
            })
            .then(data => {
                (data === 'Item(s) added to your cart') ? toast.success(data) : toast.error(data);
            })
            .catch(err => {
                toast.error(err);
            })
        }
    }

    return (
        <div>
        { !user && <button className="btn btn-primary" onClick={() => {navigate('/login')}}>Login now to buy this product</button> }

        { (user && (stock !== 0)) && (
            <div>
                <label forhtml="quantity" className="me-2">Quantity:</label>
                <input type="number" id="quantity" name="quantity" className="form-control w-25 d-inline" defaultValue="1" />
                <div className="container mt-3">
                    <button className="btn btn-primary" onClick={addtoCart}>Add to cart</button>
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