import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";

const AddProduct = () => {

    const { adminUser } = useContext(AdminAuthContext);
    const navigate = useNavigate();

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stockQuantity, setStock] = useState('');
    const [productImage, setImage] = useState('');
    const [category, setCategory] = useState('electronics');

    const addProduct = (e) => {
        e.preventDefault();

        fetch('/admin/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `bearer ${adminUser.token}`
            },
            body: JSON.stringify({
                productName,
                description,
                price,
                stockQuantity,
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
                navigate('/admin/allProducts');
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
        <div>
            <h4>Add a new product</h4>
            <form onSubmit={addProduct}>
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

                <label className="form-label mb-0">Product image URL</label>
                <input className="form-control mb-2" type="text" name="image"
                    value={productImage} onChange={(e) => setImage(e.target.value)}></input>

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

                <button className="btn btn-outline-primary">Add product</button>
            </form>
        </div>
    );
}

export default AddProduct;