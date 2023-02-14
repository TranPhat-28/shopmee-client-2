import { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
import { useOneTimeFetchHelper } from "../../hooks/useCustomFetch";

const UserDetail = (props) => {

    const { adminUser } = useContext(AdminAuthContext);
    const detailData = props.detailData;
    const detailError = props.detailError;

    const [_id, setid] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [dateJoined, setDateJoined] = useState('');
    const [userStatus, setUserStatus] = useState('');

    useEffect(() => {
        if (detailData) {
            setid(detailData._id);
            setEmail(detailData.email);
            setPassword(detailData.password);
            setPhone(detailData.phonenumber);
            setAddress(detailData.address);
            setDateJoined(detailData.dateJoined);
            setUserStatus(detailData.status);
        }
    }, [detailData])


    // Hepler fetch function
    const { oneTimeFetch: banFetch } = useOneTimeFetchHelper('/admin/restrict', 'POST', adminUser.token, {
        _id: _id
    }, '/admin/allUsers');

    const { oneTimeFetch: removeBanFetch } = useOneTimeFetchHelper('/admin/removeRestrict', 'POST', adminUser.token, {
        _id: _id
    }, '/admin/allUsers');

    const banUser = (e) => {
        e.preventDefault();

        if (window.confirm('Restrict this user?')) {
            banFetch();
        }
    }

    const removeBanUser = (e) => {
        e.preventDefault();

        if (window.confirm('Remove restriction for this user?')) {
            removeBanFetch();
        }
    }


    return (
        <div className="mt-4">
            <h4>User's detailed information</h4>
            {!detailData && <p>Click on a user to view detail</p>}

            {detailError && <p>{detailError}</p>}

            {detailData && <form onSubmit={(userStatus === 'active') ? banUser : removeBanUser}>
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

                <label className="form-label mb-0">Status</label>
                <input className="form-control mb-2" type="text"
                    style={(userStatus === 'active') ? {color: 'green'} : {color: 'red'}}
                    value={userStatus} disabled></input>

                <button className={(userStatus === 'active') ? "btn btn-outline-danger" : "btn btn-outline-success"}>{(userStatus === 'active') ? 'Restrict this user' : 'Remove restriction'}</button>
            </form>}
        </div>
    );
}

export default UserDetail;