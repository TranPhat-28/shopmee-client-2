import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { useFetchWithAuth } from "../../../hooks/useFetch";
import ItemDetailedList from "../Cart/ItemDetailedList";

const OrderDetail = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const { data, isPending, error, setData } = useFetchWithAuth('/myorders/' + id, 'GET', user.token);
    
    return(
        <div className="p-4" style={{ backgroundColor: 'white' }}>
            <h3>View detail for order {id}</h3>
            { isPending && <p>Loading...</p> }
            { error && <p>{error.message}</p> }
            { data && <ItemDetailedList detailedList={data.itemList} viewDetail={true} confirmed={data.status} />}
        </div>
    );
}

export default OrderDetail;