import { useContext } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
import { useCustomFetchWithPage, useAuthFetch } from "../../hooks/useCustomFetch";
import OrderDetail from "./OrderDetail";


const PendingOrders = () => {


    // View voucher list and paging
    const { adminUser } = useContext(AdminAuthContext);
    const { page, data, error, isPending, prevPage, nextPage } = useCustomFetchWithPage('/admin/confirmedOrders', adminUser.token);

    // View detail
    const { fetchOnClick, data: detailData, isPending: detailPending, error: detailError } = useAuthFetch();

    const orderDetail = (id) => {
        fetchOnClick('/admin/orders/' + id, 'GET', adminUser.token)
    }

    return(
        <div>
            <h3>All confirmed orders</h3>
            <p>Click to view details</p>

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

            <OrderDetail detailData={detailData} detailError={detailError} noConfirmed={true} />
        </div>
    );
}

export default PendingOrders;