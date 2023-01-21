import { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
// Import the component from the file
import { useAuthFetchAndPagination, useAuthFetch } from "../../hooks/useFetch";
import ProductDetail from "./ProductDetail";

const AllProducts = () => {

    const [ page, setPage ] = useState(0);

    const { adminUser } = useContext(AdminAuthContext);

    // Get the custom hook from the component
    const { fetchWithAuthAndPagination, data, isPending, error } = useAuthFetchAndPagination();

    // OnClick NextPage
    const nextPage = () => {
        fetchWithAuthAndPagination('/admin/allproducts', 'POST', adminUser.token, {pagenumber: page});
        setPage(page + 1);
    }

    const { fetchOnClick, data: detailData, isPending: detailPending, error: detailError } = useAuthFetch();
    // View product detail
    const viewDetail = (id) => {
        fetchOnClick('/admin/allproducts/' + id, 'GET', adminUser.token)
        //fetchOnClick(id);
    }

    // Load first page
    useEffect(() => {
        //fetchWithAuthAndPagination('/admin/allproducts', 'POST', adminUser.token, {pagenumber: 1})
        fetchWithAuthAndPagination('/admin/allproducts', 'POST', adminUser.token, {pagenumber: page});
        setPage(page + 1);
    }, []);

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
                <button className="btn btn-primary" onClick={nextPage}>Next</button>
            </div>}

            <ProductDetail detailData={detailData} detailError={detailError} />
        </div>
    );
}

export default AllProducts;

/*
{isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {data && <ul className="list-group">
                {data.map(item => (
                    <li className="list-group-item">{item.productName}</li>
                ))}
            </ul>}

            {data && <div>
                <p>Page {page} - showing 5 results per page...</p>
                <button className="btn btn-primary" onClick={nextPage}>Click</button>
            </div>}
*/