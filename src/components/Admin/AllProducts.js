import { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
// Import the component from the file
import { useCustomFetchWithPage } from "../../hooks/useCustomFetch";
import { useAuthFetchAndPagination, useAuthFetch } from "../../hooks/useFetch";
import ProductDetail from "./ProductDetail";

const AllProducts = () => {
    
    // View product list and paging
    const { adminUser } = useContext(AdminAuthContext);
    const { page, data, error, isPending, prevPage, nextPage } = useCustomFetchWithPage('/admin/allproducts', adminUser.token);

    // View product detail
    const { fetchOnClick, data: detailData, isPending: detailPending, error: detailError } = useAuthFetch();
    const viewDetail = (id) => {
        fetchOnClick('/admin/allproducts/' + id, 'GET', adminUser.token)
    }


    return(
        <div>
            <h3>All active products</h3>
            <p>Click to view and edit product's detailed information</p>

            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {data && <ul className="list-group">
                {data.map(item => (
                    <li className="list-group-item" key={item._id} onClick={() => viewDetail(item._id)} >{item.productName}</li>
                ))}
            </ul>}

            {data && <div>
                <p>Page {page} - showing 5 results per page...</p>
                <button className="btn btn-outline-primary me-2" onClick={prevPage}>Prev</button>
                <button className="btn btn-outline-primary" onClick={nextPage}>Next</button>
            </div>}

            <ProductDetail detailData={detailData} detailError={detailError} />
        </div>
    );
}

export default AllProducts;