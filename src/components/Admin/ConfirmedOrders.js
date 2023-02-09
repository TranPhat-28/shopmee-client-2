import { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
// Import the component from the file
import { useAuthFetchAndPagination, useAuthFetch } from "../../hooks/useFetch";
import OrderDetail from "./OrderDetail";


const PendingOrders = () => {

    const [ page, setPage ] = useState(0);

    const { adminUser } = useContext(AdminAuthContext);

    // Get the custom hook from the component
    const { fetchWithAuthAndPagination, data, isPending, error } = useAuthFetchAndPagination();

    // OnClick NextPage
    const nextPage = () => {
        fetchWithAuthAndPagination('/admin/confirmedOrders', 'POST', adminUser.token, {pagenumber: page});
        setPage(page + 1);
    }

    const { fetchOnClick, data: detailData, error: detailError } = useAuthFetch();
    // View voucher detail
    const orderDetail = (id) => {
        fetchOnClick('/admin/orders/' + id, 'GET', adminUser.token)
        fetchOnClick(id);
    }

    // Load first page
    useEffect(() => {
        fetchWithAuthAndPagination('/admin/confirmedOrders', 'POST', adminUser.token, {pagenumber: page});
        setPage(page + 1);
    }, []);

    return(
        <div>
            <h3>All confirmed orders</h3>
            <p>Click to view details</p>

            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {data && <ul className="list-group">
                {data.map(item => (
                    <li className="list-group-item" key={item._id} onClick={() => orderDetail(item._id)}>Order {item._id}</li>
                ))}
            </ul>}

            {data && <div>
                <p>Page {page} - showing 5 results per page...</p>
                <button className="btn btn-primary" onClick={nextPage}>Next</button>
            </div>}

            <OrderDetail detailData={detailData} detailError={detailError} noConfirmed={true} />
        </div>
    );
}

export default PendingOrders;