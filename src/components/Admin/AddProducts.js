import { useContext, useState } from "react";
import { AdminAuthContext } from "../../contexts/AdminAuthContext";
import { useOneTimeFetchHelper } from "../../hooks/useCustomFetch";

const AddProduct = () => {

    const { adminUser } = useContext(AdminAuthContext);

    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [stockQuantity, setStock] = useState('');
    const [productImage, setImage] = useState('');
    const [category, setCategory] = useState('electronics');

    const { oneTimeFetch } = useOneTimeFetchHelper('/admin/addProduct', 'POST', adminUser.token, {
        productName,
        description,
        price,
        stockQuantity,
        productImage,
        category
    }, '/admin/allProducts')

    const addProduct = (e) => {
        e.preventDefault();

        oneTimeFetch();
    }

    return (
        <div>
            <h3>Add a new product</h3>
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