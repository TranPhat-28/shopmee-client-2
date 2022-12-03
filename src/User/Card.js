import { NumericFormat } from "react-number-format";

const Card = (props) => {

    const product = props.product;

    return (
        <div className="card-container m-2">
            <div className="card p-2 shadow">
                <img className="card-img-top" alt="ProductIMG" src={product.productImage}/>
                <div className="card-body">
                    <h4 className="card-title">
                        <NumericFormat displayType="text" value={product.price} thousandsGroupStyle="thousand" thousandSeparator="," /> VND
                    </h4>
                    <p className="card-text">{product.productName}</p>
                </div>
                
                <div className="overlay">
                    <span className="overlay-text">View details</span>
                </div>
            </div>
        </div>
    )
}

export default Card;