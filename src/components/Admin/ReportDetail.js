import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";

const ReportDetail = (props) => {

    const navigate = useNavigate();
    const { adminUser } = useContext(AdminAuthContext);
    const detailData = props.detailData;
    const detailError = props.detailError;

    const [_id, setid] = useState('');
    const [user, setUser] = useState('');
    const [title, setTitle] = useState('');
    const [detail, setDetail] = useState('');


    useEffect(() => {
        if (detailData) {
            setid(detailData._id);
            setUser(detailData.user);
            setTitle(detailData.title);
            setDetail(detailData.detail);
        }
    }, [detailData])


    const deleteVoucher = (e) => {
        e.preventDefault();
        
        if (window.confirm('Do you really want to delete this report?')) {
            fetch('/admin/report', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `bearer ${adminUser.token}`
                },
                body: JSON.stringify({
                    _id
                })
            })
                .then(res => {
                    if (!res.ok) { throw res }
                    return res.json()
                })
                .then(data => {
                    toast.success(data);
                    //navigate(0);
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
            <h4>Report detail</h4>
            {!detailData && <p>Click on a product to view detail</p>}

            {detailError && <p>{detailError}</p>}

            {detailData && <form onSubmit={deleteVoucher}>
                <label className="form-label mb-0">Report ID</label>
                <input className="form-control mb-2" type="text"
                    value={_id} disabled></input>

                <label className="form-label mb-0">From user</label>
                <input className="form-control mb-2" type="text"
                    value={user} disabled></input>

                <label className="form-label mb-0">Title</label>
                <input className="form-control mb-2" type="text"
                    value={title} disabled></input>

                <label className="form-label mb-0">Detail</label>
                <textarea rows="3" className="form-control mb-2" type="text"
                    value={detail} disabled></textarea>

                <button className="btn btn-outline-primary">Delete this report</button>
            </form>}
        </div>
    );
}

export default ReportDetail;