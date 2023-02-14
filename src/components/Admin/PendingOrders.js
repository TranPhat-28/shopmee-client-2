import { useContext } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
// Import the component from the file
import OrderDetail from "./OrderDetail";
import { useCustomFetchWithPage, useAuthFetch } from "../../hooks/useCustomFetch";

const PendingOrders = () => {

    // View voucher list and paging
    const { adminUser } = useContext(AdminAuthContext);
    const { page, data, error, isPending, prevPage, nextPage } = useCustomFetchWithPage('/admin/pendingOrders', adminUser.token);

    // View detail
    const { fetchOnClick, data: detailData, isPending: detailPending, error: detailError } = useAuthFetch();
    const orderDetail = (id) => {
        fetchOnClick('/admin/orders/' + id, 'GET', adminUser.token)
    }

    return(
        <div>
            <h3>All currently pending orders</h3>
            <p>Click to view details and confirm orders</p>

            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {data && <ul className="list-group">
                {data.map(item => (
                    <li className="list-group-item" key={item._id} onClick={() => orderDetail(item._id)}>{(item._id !== 'No more result to display') ? 'Order ': '' }{item._id}</li>
                ))}
            </ul>}

            {data && <div>
                <p>Page {page} - showing 5 results per page...</p>
                <button className="btn btn-outline-primary me-2" onClick={prevPage}>Prev</button>
                <button className="btn btn-outline-primary" onClick={nextPage}>Next</button>
            </div>}

            <OrderDetail detailData={detailData} detailError={detailError} />
        </div>
    );
}

export default PendingOrders;