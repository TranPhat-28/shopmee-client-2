import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";

const UserDetail = (props) => {

    const navigate = useNavigate();
    const { adminUser } = useContext(AdminAuthContext);
    const detailData = props.detailData;
    const detailError = props.detailError;

    const [_id, setid] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [dateJoined, setDateJoined] = useState('');

    useEffect(() => {
        if (detailData) {
            setid(detailData._id);
            setEmail(detailData.email);
            setPassword(detailData.password);
            setPhone(detailData.phonenumber);
            setAddress(detailData.address);
            setDateJoined(detailData.dateJoined);
        }
    }, [detailData])


    const deleteVoucher = (e) => {
        e.preventDefault();

        /*
        if (window.confirm('Do you really want to delete this voucher?')) {
            fetch('/admin/voucher', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${adminUser.token}`
                },
                body: JSON.stringify({
                    _id,
                    voucherCode
                })
            })
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json()
                })
                .then(data => {
                    toast.success(data);
                    navigate(0);
                })
                .catch(e => {
                    e.json().then(err => {
                        toast.error(err)
                    })
                })
        }
        */
    }

    return (
        <div className="mt-4">
            <h4>User's detailed information</h4>
            {!detailData && <p>Click on a user to view detail</p>}

            {detailError && <p>{detailError}</p>}

            {detailData && <form onSubmit={deleteVoucher}>
                <label className="form-label mb-0">User ID</label>
                <input className="form-control mb-2" type="text"
                    value={_id} disabled></input>

                <label className="form-label mb-0">Email</label>
                <input className="form-control mb-2" type="text"
                    value={email} disabled></input>

                <label className="form-label mb-0">Password</label>
                <input className="form-control mb-2" type="text"
                    value={password} disabled></input>

                <label className="form-label mb-0">Phone number</label>
                <input className="form-control mb-2" type="number"
                    value={phone} disabled></input>

                <label className="form-label mb-0">Address</label>
                <input className="form-control mb-2" type="text"
                    value={address} disabled></input>

                <label className="form-label mb-0">Date joined</label>
                <input className="form-control mb-2" type="text"
                    value={dateJoined} disabled></input>

                <button className="btn btn-outline-primary">Delete this user</button>
            </form>}
        </div>
    );
}

export default UserDetail;