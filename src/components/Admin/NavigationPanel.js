import { Link } from "react-router-dom";

const NavigationPanel = () => {

    return (
        <div className="col-sm-12 col-md-4 p-3">
            <div className="container border rounded p-3">
                <h3 className="mb-4">Administrator Panel</h3>

                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/allProducts">All products</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/addProduct">Add new product</Link>
                    </li>

                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/allVouchers">All vouchers</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/addVoucher">Add new voucher</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationPanel;

/*
<h3 class="mb-4">Administrator Panel</h3>
        
                            <ul class="list-group">
                                <li class="list-group-item">
                                    <a class="nav-link" href="/admin/orders">Orders</a>
                                </li>
                                <li class="list-group-item" aria-current="true">
                                    <a class="nav-link" href="/admin/customersAndProducts">Customers and Products</a>
                                </li>
                                <li class="list-group-item active">
                                    <a class="nav-link" href="#">Add a new product</a>
                                </li>
                                <li class="list-group-item">
                                    <a class="nav-link" href="/admin/editProduct">Edit a product</a>
                                </li>
                                <li class="list-group-item">
                                    <a class="nav-link" href="/admin/report">User report</a>
                                </li>
                                <li class="list-group-item" aria-current="true">
                                    <a class="nav-link" href="/admin/viewVoucher">All vouchers</a>
                                </li>
                                <li class="list-group-item" aria-current="true">
                                    <a class="nav-link" href="/admin/addVoucher">Add a new voucher</a>
                                </li>

*/