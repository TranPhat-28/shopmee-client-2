import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";

const ProductDetail = (props) => {

    const { adminUser } = useContext(AdminAuthContext);
    const detailData = props.detailData;
    const detailError = props.detailError;

    const [_id, setid] = useState('');
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stockQuantity, setStock] = useState('');
    const [sold, setSold] = useState('');
    const [productImage, setImage] = useState('');
    const [category, setCategory] = useState('');


    useEffect(() => {
        if (detailData) {
            setProductName(detailData.productName);
            setid(detailData._id);
            setDescription(detailData.description);
            setPrice(detailData.price);
            setStock(detailData.stockQuantity);
            setSold(detailData.sold);
            setImage(detailData.productImage);
            setCategory(detailData.category);
        }
    }, [detailData])


    const updateProduct = (e) => {
        e.preventDefault();

        fetch('/admin/products/' + _id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${adminUser.token}`
            },
            body: JSON.stringify({
                _id,
                productName,
                description,
                price,
                stockQuantity,
                sold,
                productImage,
                category
            })
        })
        .then(res => {
            if (!res.ok) { throw res }
            return res.json()
        })
        .then(data => {
            //setData(data);
            //setIsPending(false);
            toast.success(data);
        })
        .catch(e => {
            e.json().then(err => {
                //setIsPending(false);
                //setError(err.error);
                toast.error(err)
            })
        })
    }

    return (
        <div className="mt-4">
            <h4>Product detail</h4>
            {!detailData && <p>Click on a product to view detail</p>}

            {detailError && <p>{detailError}</p>}

            {detailData && <form onSubmit={updateProduct}>
                <label className="form-label mb-0">Product ID</label>
                <input className="form-control mb-2" type="text"
                    value={_id} onChange={(e) => setid(e.target.value)} disabled></input>

                <label className="form-label mb-0">Product name</label>
                <input className="form-control mb-2" type="text" name="name"
                    value={productName} onChange={(e) => setProductName(e.target.value)} required></input>

                <label className="form-label mb-0">Description</label>
                <input className="form-control mb-2" type="text" name="description"
                    value={description} onChange={(e) => setDescription(e.target.value)} required></input>

                <label className="form-label mb-0">Price</label>
                <input className="form-control mb-2" type="number" name="price"
                    value={price} onChange={(e) => setPrice(e.target.value)} required></input>

                <label className="form-label mb-0">Stock</label>
                <input className="form-control mb-2" type="number" name="stock"
                    value={stockQuantity} onChange={(e) => setStock(e.target.value)} required></input>

                <label className="form-label mb-0">Sold</label>
                <input className="form-control mb-2" type="number" name="sold"
                    value={sold} onChange={(e) => setSold(e.target.value)} required></input>

                <label className="form-label mb-0">Product image URL</label>
                <input className="form-control mb-2" type="text" name="image"
                    value={productImage} onChange={(e) => setImage(e.target.value)} required></input>

                <label className="form-label mb-0">Category</label>
                <select name="category" className="form-control mb-2" value={category} onChange={(e) => setCategory(e.target.value)} required>
                    <option value="electronics">Electronics</option>
                    <option value="healthcares">Healthcares</option>
                    <option value="tools">Tools</option>
                    <option value="lifestyles">Lifestyles</option>
                    <option value="clothings">Clothings</option>
                    <option value="accessories">Accessories</option>
                    <option value="cosmetics">Cosmetics</option>
                    <option value="shoes">Shoes</option>
                </select>

                <button className="btn btn-outline-primary">Update</button>
            </form>}
        </div>
    );
}

export default ProductDetail;