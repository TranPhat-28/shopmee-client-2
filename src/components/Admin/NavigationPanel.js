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

                    <li className="list-group-item"></li>

                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/allVouchers">All vouchers</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/addVoucher">Add new voucher</Link>
                    </li>

                    <li className="list-group-item"></li>

                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/pendingOrders">Pending orders</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/confirmedOrders">Confirmed orders</Link>
                    </li>

                    <li className="list-group-item"></li>

                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/allUsers">Manage users</Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/report">Reports</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationPanel;
// TODO
// 1. Orders
// 2. Customers