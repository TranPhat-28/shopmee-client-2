const Card = (props) => {

    const product = props.product;

    return (
        <div className="card-container m-2">
            <div className="card p-2 shadow">
                <img className="card-img-top" alt="ProductIMG" src={product.productImage}/>
                <div className="card-body">
                    <h5 className="card-title">{product.price} VND</h5>
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