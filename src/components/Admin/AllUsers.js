import { useContext } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
// Import the component from the file
import { useCustomFetchWithPage, useAuthFetch } from "../../hooks/useCustomFetch";
import UserDetail from "./UserDetail";


const AllUsers = () => {

    const { adminUser } = useContext(AdminAuthContext);
    const { page, data, error, isPending, prevPage, nextPage } = useCustomFetchWithPage('/admin/allUsers', adminUser.token);

    const { fetchOnClick, data: detailData, isPending: detailPending, error: detailError } = useAuthFetch();
    const viewUserDetail = (id) => {
        fetchOnClick('/admin/allUsers/' + id, 'GET', adminUser.token)
    }

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
                <button className="btn btn-outline-primary me-2" onClick={prevPage}>Prev</button>
                <button className="btn btn-outline-primary" onClick={nextPage}>Next</button>
            </div>}

            <UserDetail detailData={detailData} detailError={detailError} />
        </div>
    );
}

export default AllUsers;