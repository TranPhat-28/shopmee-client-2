import { NumericFormat } from "react-number-format";
import { useParams } from "react-router-dom";
import { useCustomFetch } from "../../../hooks/useFetch";
import AddtoCart from "./AddtoCart";
import ViewFeedback from "./ViewFeedback";

const ProductDetail = () => {
    const { id } = useParams();
    const { data, isPending } = useCustomFetch('/product/' + id);

    return (
        <div className="container h-100 pt-4 pb-4" style={{ backgroundColor: "white" }}>
            { data && (
            <div className="row">
                <div className="col-md-6 col-12 d-flex justify-content-center">
                    <img id="product-image" className="img-fluid" alt="Product" src={data.productImage}></img>
                </div>

                <div className="col-md-6 col-12 p-4">
                    <div>
                        <p style={{ fontSize: "1.5rem" }}>{data.productName}</p>
                        <h2 style={{ fontWeight: "bold" }}>
                            <NumericFormat displayType="text" value={data.price} thousandsGroupStyle="thousand" thousandSeparator="," /> VND
                        </h2>
                        <p>Description: {data.description}</p>
                        <p>In stock: {data.stockQuantity}</p>
                        <p>Sold: {data.sold}</p>
                        <p>Category: {data.category.charAt(0).toUpperCase() + data.category.slice(1)}</p>
                    </div>

                    <AddtoCart stock={data.stockQuantity}/>
                </div>
            </div>
            )}

            {isPending && <p>Loading...</p>}

            <ViewFeedback />
        </div>
    );
}

export default ProductDetail;