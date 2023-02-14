import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
import { useOneTimeFetchHelper } from "../../hooks/useCustomFetch";

const ReportDetail = (props) => {

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


    // Hepler fetch function
    const { oneTimeFetch } = useOneTimeFetchHelper('/admin/report', 'DELETE', adminUser.token, {
        _id
    });

    const deleteReport = (e) => {
        e.preventDefault();

        if (window.confirm('Do you really want to delete this report?')) {
            oneTimeFetch();
        }
    }

    return (
        <div className="mt-4">
            <h4>Report detail</h4>
            {!detailData && <p>Click on a report to view detail</p>}

            {detailError && <p>{detailError}</p>}

            {detailData && <form onSubmit={deleteReport}>
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

                <button className="btn btn-outline-danger">Delete this report</button>
            </form>}
        </div>
    );
}

export default ReportDetail;