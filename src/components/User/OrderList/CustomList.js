import { useNavigate } from "react-router-dom";

const CustomList = (props) => {

    const navigate = useNavigate()
    const { data, page, isPending, error, prevPage, nextPage } = props;

    return (
        <div>
            {(data && (data.length == 0)) && <p>No more orders to show</p>}
            {(data && (data.length !== 0)) &&
                <div className="container p-0" id="cartContainer">
                    <ul className="list-group w-100">
                        {data.map(item => (
                            <li className="list-group-item cart-item" key={item.idInCart} onClick={() => { navigate('/myOrders/' + item._id) }} >
                                [{item.dateCreated.split('T')[0]}] Order {item._id}
                            </li>
                        ))}
                    </ul>
                </div>
            }
            {data && <div className="d-flex align-items-center mt-2">
                <p className="m-0">Page {page}</p>
                <button className="btn btn-outline-primary ms-2 me-2" onClick={prevPage}>Prev</button>
                <button className="btn btn-outline-primary ms-2" onClick={nextPage}>Next</button>
            </div>}
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
        </div>
    );
}

export default CustomList;