import { NumericFormat } from "react-number-format";

const ItemDetailedList = (props) => {

    const detailedList = props.detailedList;

    return (
        <div className="container p-0" id="cartContainer">
            <ul className="list-group w-100">
                {detailedList.map(item => (
                    <li className="list-group-item cart-item" key={item.idInCart}>
                        <div className="row">
                            <div className="container col-4 col-lg-6 d-flex align-items-center">
                                <img id="cart-product-image" className="img-fluid" alt="Product" src={item.image} />
                            </div>
                            <div className="container col-8 col-lg-3 d-flex flex-column">
                                <h5 className="m-1">{item.name}</h5>
                                <p className="ps-3 m-1 text-secondary">Price:
                                    <NumericFormat displayType="text" value={item.price} thousandsGroupStyle="thousand" thousandSeparator="," /> VND
                                </p>
                                <p className="ps-3 m-1 text-secondary">Quantity: {item.quantity}</p>
                                <p className="m-1" style={{ fontWeight: "bold" }}>Total:
                                    <NumericFormat displayType="text" value={item.total} thousandsGroupStyle="thousand" thousandSeparator="," /> VND
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ItemDetailedList;