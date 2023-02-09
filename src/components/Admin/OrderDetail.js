import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";

const OrderDetail = (props) => {

    const navigate = useNavigate();
    const { adminUser } = useContext(AdminAuthContext);
    const detailData = props.detailData;
    const detailError = props.detailError;
    const noConfirmed = props.noConfirmed;

    const [_id, setid] = useState('');
    const [email, setEmail] = useState('');
    const [itemList, setItemList] = useState([]);
    const [voucherUsed, setVoucherUsed] = useState('');
    const [total, setTotal] = useState('');
    const [discount, setDiscount] = useState('');
    const [final, setFinal] = useState('');
    const [dateCreated, setDateCreated] = useState('');

    useEffect(() => {
        if (detailData) {
            setid(detailData._id);
            setEmail(detailData.email);
            setItemList(detailData.itemList);
            setVoucherUsed(detailData.voucherUsed);
            setTotal(detailData.totalCost);
            setDiscount(detailData.discountAmount);
            setFinal(detailData.finalCost);
            setDateCreated(detailData.dateCreated);
        }
    }, [detailData])


    const confirmOrder = (e) => {
        e.preventDefault();
        
        if (window.confirm('Confirm this order?')) {
            fetch('/admin/pendingOrders/' + _id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${adminUser.token}`
                }
            })
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json()
                })
                .then(data => {
                    toast.success(data);
                    navigate('/admin/confirmedOrders');
                })
                .catch(e => {
                    e.json().then(err => {
                        toast.error(err)
                    })
                })
        }
    }

    return (
        <div className="mt-4">
            <h4>Voucher detail</h4>
            {!detailData && <p>Click on a product to view detail</p>}

            {detailError && <p>{detailError}</p>}

            {detailData && <form onSubmit={confirmOrder}>
                <label className="form-label mb-0">Order ID</label>
                <input className="form-control mb-2" type="text"
                    value={_id} disabled></input>

                <label className="form-label mb-0">Email</label>
                <input className="form-control mb-2" type="text"
                    value={email} disabled></input>

                <label className="form-label mb-0">Voucher used</label>
                <input className="form-control mb-2" type="text"
                    value={voucherUsed} disabled></input>

                <label className="form-label mb-0">Date ordered</label>
                <input className="form-control mb-2" type="text"
                    value={dateCreated} disabled></input>

                <label className="form-label mb-0">Total cost</label>
                <input className="form-control mb-2" type="text"
                    value={total + " VND"} disabled></input>

                <label className="form-label mb-0">Discount amount</label>
                <input className="form-control mb-2" type="text"
                    value={discount + " VND"} disabled></input>

                <label className="form-label mb-0">Final cost</label>
                <input className="form-control mb-2" type="text"
                    value={final + " VND"} disabled></input>

                <label className="form-label mb-0">Items ordered</label>
                <ul className="list-group border ps-5 mb-2">
                    {itemList.map(item => (
                        <div>
                            <li>{item.name}</li>
                            <li style={{ listStyleType: 'none' }}>
                                <ul>
                                    <li>Price: {item.price} VND</li>
                                    <li>Order: {item.quantity} unit(s)</li>
                                    <li>Total: {item.totalPrice} VND</li>
                                </ul>
                            </li>
                        </div>
                    ))}
                </ul>

                { !noConfirmed && <button className="btn btn-outline-primary">Confirm shipping</button> }
            </form>}
        </div>
    );
}

export default OrderDetail;