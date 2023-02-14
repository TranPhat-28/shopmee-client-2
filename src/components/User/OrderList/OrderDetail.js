import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useFetchWithAuth } from "../../../hooks/useFetch";
import ItemDetailedList from "../Cart/ItemDetailedList";

const OrderDetail = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const { data, isPending, error, setData } = useFetchWithAuth('/myorders/' + id, 'GET', user.token);

    return (
        <div className="p-4" style={{ backgroundColor: 'white' }}>
            <h3>View detail for order {id}</h3>
            {isPending && <p>Loading...</p>}
            {error && <p>{error.message}</p>}

            {data && <div>
                <p className="m-0 ps-5">User email: {data.email}</p>
                <p className="m-0 ps-5">Date ordered: {data.dateCreated.split('T')[0]}</p>
                <p className="m-0 ps-5">Time ordered: {data.dateCreated.split('T')[1]}</p>

                <br></br>

                <p className="m-0 ps-5">Total cost: {data.totalCost}</p>
                <p className="m-0 ps-5">Voucher used: {data.voucherUsed}</p>
                <p className="m-0 ps-5">Discount: {data.discountAmount}</p>
                <p className="m-0 ps-5">Final cost: {data.finalCost}</p>

                <br></br><br></br>
            </div>}

            {data && <ItemDetailedList detailedList={data.itemList} viewDetail={true} confirmed={data.status} />}
        </div>
    );
}

export default OrderDetail;