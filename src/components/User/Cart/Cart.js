const Cart = () => {
    return(
        <div className="container h-100 pt-4 pb-4" style={{backgroundColor: "white"}}>
            <h3>Your cart: </h3>
            <p className="text-secondary ps-3">Click to remove item from cart</p>

            <div className="container p-0" id="cartContainer">
                <ul className="list-group w-100">
                    <li className="list-group-item cart-item">
                        <div className="row">
                            <div className="container col-4 col-lg-6 d-flex align-items-center">
                                <img id="product-image" className="img-fluid" alt="Product" />
                            </div>
                            <div className="container col-8 col-lg-3 d-flex flex-column">
                                <h5 className="m-1">Ha</h5>
                                <p className="ps-3 m-1 text-secondary"></p>
                                <p className="ps-3 m-1 text-secondary"></p>
                                <p className="m-1" style={{fontWeight: "bold"}}>Total: 
                                    <span className="price"></span></p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Cart;