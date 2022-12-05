import { NumericFormat } from "react-number-format";
import { useNavigate } from "react-router-dom";

const Card = (props) => {

    const product = props.product;
    const navigate = useNavigate();

    const viewDetail = (id) => {
        navigate('/product/' + id);
    }

    return (
        <div className="card-container m-2" onClick={() => { viewDetail(product._id) }}>
            <div className="card p-2 h-100 shadow">
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