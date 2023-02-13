import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useAuthFetchAndPagination } from "../../../hooks/useFetch";

const OrderList = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // A is for pending orders
    const [pageA, setPageA] = useState(0);
    // B is for confirmed orders
    const [pageB, setPageB] = useState(0);

    // Get the custom hook from the component
    const { fetchWithAuthAndPagination: fetchWithAuthAndPaginationA, data: dataA, isPending: isPendingA, error: errorA } = useAuthFetchAndPagination();
    const { fetchWithAuthAndPagination: fetchWithAuthAndPaginationB, data: dataB, isPending: isPendingB, error: errorB } = useAuthFetchAndPagination();

    // OnClick NextPage
    const nextPageA = (status) => {
        fetchWithAuthAndPaginationA('/myOrders', 'POST', user.token, {pagenumber: pageA, status: 'pending'});
        setPageA(pageA + 1);
    }

    const nextPageB = (status) => {
        fetchWithAuthAndPaginationB('/myOrders', 'POST', user.token, {pagenumber: pageB, status: 'confirmed'});
        setPageB(pageB + 1);
    }

    // Load first page
    useEffect(() => {
        fetchWithAuthAndPaginationA('/myOrders', 'POST', user.token, { pagenumber: pageA, status: 'pending' });
        fetchWithAuthAndPaginationB('/myOrders', 'POST', user.token, { pagenumber: pageB, status: 'confirmed' });
        setPageA(pageA + 1);
        setPageB(pageB + 1);
    }, []);

    return (
        <div className="container h-100 pt-4 pb-4" style={{ backgroundColor: "white" }}>
            <h3>All of your orders listed here</h3>
            <p className="text-secondary ps-3">Click to view detail</p>

            <h4>Pending orders</h4>
            {(dataA && (dataA.length == 0)) && <p>No pending orders</p>}
            {(dataA && (dataA.length !== 0)) &&
                <div className="container p-0" id="cartContainer">
                    <ul className="list-group w-100">
                        {dataA.map(item => (
                            <li className="list-group-item cart-item" key={item.idInCart} onClick={() => {navigate('/myOrders/' + item._id)}} >
                                [{item.dateCreated.split('T')[0]}] Order {item._id}
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex align-items-center mt-2">
                        <p className="m-0">Page {pageA}</p>
                        <button className="btn btn-outline-primary ms-2" onClick={nextPageA}>Next</button>
                    </div>
                </div>
            }
            <br></br>

            <h4>Confirmed orders</h4>
            {(dataB && (dataB.length == 0)) && <p>No confirmed orders</p>}
            {(dataB && (dataB.length !== 0)) &&
                <div className="container p-0" id="cartContainer">
                    <ul className="list-group w-100">
                        {dataB.map(item => (
                            <li className="list-group-item cart-item" key={item.idInCart} onClick={() => {navigate('/myOrders/' + item._id)}} >
                                [{item.dateCreated.split('T')[0]}] Order {item._id}
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex align-items-center mt-2">
                        <p className="m-0">Page {pageB}</p>
                        <button className="btn btn-outline-primary ms-2" onClick={nextPageB}>Next</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default OrderList;