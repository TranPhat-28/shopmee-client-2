import { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
// Import the component from the file
import { useCustomFetchWithPage, useAuthFetch } from "../../hooks/useCustomFetch";
import VoucherDetail from "./VoucherDetail";


const AllVouchers = () => {

    // View voucher list and paging
    const { adminUser } = useContext(AdminAuthContext);
    const { page, data, error, isPending, prevPage, nextPage } = useCustomFetchWithPage('/admin/allVouchers', adminUser.token);

    // View product detail
    const { fetchOnClick, data: detailData, isPending: detailPending, error: detailError } = useAuthFetch();
    const voucherDetail = (id) => {
        fetchOnClick('/admin/voucher/' + id, 'GET', adminUser.token)
    }

    return(
        <div>
            <h3>All voucher</h3>
            <p>Click to view and delete voucher</p>

            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {data && <ul className="list-group">
                {data.map(item => (
                    <li className="list-group-item" key={item._id} onClick={() => voucherDetail(item._id)}>{item.voucherCode}</li>
                ))}
            </ul>}

            {data && <div>
                <p>Page {page} - showing 5 results per page...</p>
                <button className="btn btn-outline-primary me-2" onClick={prevPage}>Prev</button>
                <button className="btn btn-outline-primary" onClick={nextPage}>Next</button>
            </div>}

            <VoucherDetail detailData={detailData} detailError={detailError} />
        </div>
    );
}

export default AllVouchers;