import { useContext, useEffect, useState } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
// Import the component from the file
import { useAuthFetchAndPagination, useAuthFetch } from "../../hooks/useFetch";
import UserDetail from "./UserDetail";


const AllUsers = () => {

    const [ page, setPage ] = useState(0);

    const { adminUser } = useContext(AdminAuthContext);

    // Get the custom hook from the component
    const { fetchWithAuthAndPagination, data, isPending, error } = useAuthFetchAndPagination();

    // OnClick NextPage
    const nextPage = () => {
        fetchWithAuthAndPagination('/admin/allUsers', 'POST', adminUser.token, {pagenumber: page});
        setPage(page + 1);
    }

    const { fetchOnClick, data: detailData, error: detailError } = useAuthFetch();
    // View voucher detail
    const viewUserDetail = (id) => {
        fetchOnClick('/admin/allUsers/' + id, 'GET', adminUser.token)
        fetchOnClick(id);
    }

    // Load first page
    useEffect(() => {
        fetchWithAuthAndPagination('/admin/allUsers', 'POST', adminUser.token, {pagenumber: page});
        setPage(page + 1);
    }, []);

    return(
        <div>
            <h3>Manage all users</h3>
            <p>Click to view information and delete user</p>

            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {data && <ul className="list-group">
                {data.map(item => (
                    <li className="list-group-item" key={item._id} onClick={() => viewUserDetail(item._id)}>{item.email}</li>
                ))}
            </ul>}

            {data && <div>
                <p>Page {page} - showing 5 results per page...</p>
                <button className="btn btn-primary" onClick={nextPage}>Next</button>
            </div>}

            <UserDetail detailData={detailData} detailError={detailError} />
        </div>
    );
}

export default AllUsers;