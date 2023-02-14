import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useCustomFetchWithPage } from "../../../hooks/useCustomFetch";
import CustomList from "./CustomList";

const OrderList = () => {

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // View voucher list and paging
    const { page: pageA, data: dataA, error: errorA, isPending: isPendingA, prevPage: prevPageA, nextPage: nextPageA } = useCustomFetchWithPage('/myOrders/pending', user.token);
    const { page: pageB, data: dataB, error: errorB, isPending: isPendingB, prevPage: prevPageB, nextPage: nextPageB } = useCustomFetchWithPage('/myOrders/confirmed', user.token);

    return (
        <div className="container h-100 pt-4 pb-4" style={{ backgroundColor: "white" }}>
            <h3>All of your orders listed here</h3>
            <p className="text-secondary ps-3">Click to view detail</p>

            <h4>Pending orders</h4>
            <CustomList data={dataA} page={pageA} isPending={isPendingA} error={errorA} prevPage={prevPageA} nextPage={nextPageA} />

            <br></br>

            <h4>Confirmed orders</h4>
            <CustomList data={dataB} page={pageB} isPending={isPendingB} error={errorB} prevPage={prevPageB} nextPage={nextPageB} />

        </div>
    );
}

export default OrderList;