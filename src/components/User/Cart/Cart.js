import { useContext } from "react";
import { NumericFormat } from "react-number-format";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../contexts/AuthContext";
import { useFetchWithAuth } from "../../../hooks/useFetch";
import VoucherCheck from "./VoucherCheck";

const Cart = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const { data, isPending, error, setData } = useFetchWithAuth('/cart', 'POST', user.token, { email: user.email });



    if (error) {
        navigate('/');
        toast.error(error);
    }

    const removeItem = (id) => {
        if (window.confirm('Do you really want to remove this item?')) {
            fetch('/cart/' + id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${user.token}`
                }
            })
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json()
                })
                .then(data => {
                    // Re-render the itemlist
                    setData(data);
                    toast.success('Item removed from your cart');
                })
                .catch(e => {
                    e.json().then(err => {
                        toast.error(err.error);
                    })
                })
        }
    }


    return (
        <div className="container h-100 pt-4 pb-4" style={{ backgroundColor: "white" }}>
            <h3>Your cart: {data && data.detailedList.length}</h3>
            <p className="text-secondary ps-3">Click to remove item from cart</p>

            {(data && (data.detailedList.length === 0)) &&
                <div className="container d-flex flex-column" style={{ width: "fit-content" }}>
                    <img src="empty.jpg" id="empty" alt="Empty" />
                    <h4 className="text-center">Your cart is empty</h4>
                    <Link className="btn btn-primary" type="button" to='/'>Continue shopping</Link>
                </div>
            }

            {(data && (data.detailedList.length !== 0)) &&
                <div className="container p-0" id="cartContainer">
                    <ul className="list-group w-100">
                        {data.detailedList.map(item => (
                            <li className="list-group-item cart-item" key={item.idInCart} onClick={() => { removeItem(item.idInCart) }}>
                                <div className="row">
                                    <div className="container col-4 col-lg-6 d-flex align-items-center">
                                        <img id="cart-product-image" className="img-fluid" alt="Product" src={item.image} />
                                    </div>
                                    <div className="container col-8 col-lg-3 d-flex flex-column">
                                        <h5 className="m-1">{item.name}</h5>
                                        <p className="ps-3 m-1 text-secondary">Price:
                                            <NumericFormat displayType="text" value={item.price} thousandsGroupStyle="thousand" thousandSeparator="," /> VND
                                        </p>
                                        <p className="ps-3 m-1 text-secondary">Quantity: {item.quantity}</p>
                                        <p className="m-1" style={{ fontWeight: "bold" }}>Total:
                                            <NumericFormat displayType="text" value={item.total} thousandsGroupStyle="thousand" thousandSeparator="," /> VND
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            }

            {(data && (data.detailedList.length !== 0)) && <div className="text-end pt-4">
                <VoucherCheck total={data.total} cartDetail={data.detailedList} />
            </div>}

            {isPending && <div>Loading...</div>}

        </div>
    );
}

export default Cart;