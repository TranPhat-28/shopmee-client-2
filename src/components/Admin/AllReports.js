import { useContext } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
import { useCustomFetchWithPage, useAuthFetch } from "../../hooks/useCustomFetch";
import ReportDetail from "./ReportDetail";


const AllReport = () => {


    // View voucher list and paging
    const { adminUser } = useContext(AdminAuthContext);
    const { page, data, error, isPending, prevPage, nextPage } = useCustomFetchWithPage('/admin/reports', adminUser.token);

    // View product detail
    const { fetchOnClick, data: detailData, isPending: detailPending, error: detailError } = useAuthFetch();
    const reportDetail = (id) => {
        fetchOnClick('/admin/reports/' + id, 'GET', adminUser.token)
    }

    return(
        <div>
            <h3>All report from users</h3>
            <p>Click to view and delete report</p>

            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {data && <ul className="list-group">
                {data.map(item => (
                    <li className={ (item.status === 'unread') ? "list-group-item fw-bold" : "list-group-item" } key={item._id} onClick={() => reportDetail(item._id)}>
                        {(item.status === 'unread') ? "[UNREAD]" : ""}{item.title}
                    </li>
                ))}
            </ul>}

            {data && <div>
                <p>Page {page} - showing 5 results per page...</p>
                <button className="btn btn-outline-primary me-2" onClick={prevPage}>Prev</button>
                <button className="btn btn-outline-primary" onClick={nextPage}>Next</button>
            </div>}

            <ReportDetail detailData={detailData} detailError={detailError} />
        </div>
    );
}

export default AllReport;