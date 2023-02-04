import { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
// Import the component from the file
import { useAuthFetchAndPagination, useAuthFetch } from "../../hooks/useFetch";
import ReportDetail from "./ReportDetail";


const AllReport = () => {

    const [ page, setPage ] = useState(0);

    const { adminUser } = useContext(AdminAuthContext);

    // Get the custom hook from the component
    const { fetchWithAuthAndPagination, data, isPending, error } = useAuthFetchAndPagination();

    // OnClick NextPage
    const nextPage = () => {
        fetchWithAuthAndPagination('/admin/reports', 'POST', adminUser.token, {pagenumber: page});
        setPage(page + 1);
    }

    const { fetchOnClick, data: detailData, error: detailError } = useAuthFetch();
    // View voucher detail
    const voucherDetail = (id) => {
        fetchOnClick('/admin/reports/' + id, 'GET', adminUser.token)
        fetchOnClick(id);
    }

    // Load first page
    useEffect(() => {
        fetchWithAuthAndPagination('/admin/reports', 'POST', adminUser.token, {pagenumber: page});
        setPage(page + 1);
    }, []);

    return(
        <div>
            <h3>All report from users</h3>
            <p>Click to view and delete report</p>

            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {data && <ul className="list-group">
                {data.map(item => (
                    <li className={ (item.status === 'unread') ? "list-group-item fw-bold" : "list-group-item" } key={item._id} onClick={() => voucherDetail(item._id)}>
                        {(item.status === 'unread') ? "[UNREAD]" : ""}{item.title}
                    </li>
                ))}
            </ul>}

            {data && <div>
                <p>Page {page} - showing 5 results per page...</p>
                <button className="btn btn-primary" onClick={nextPage}>Next</button>
            </div>}

            <ReportDetail detailData={detailData} detailError={detailError} />
        </div>
    );
}

export default AllReport;