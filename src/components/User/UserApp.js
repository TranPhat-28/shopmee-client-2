import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import CategoryView from "./CategoryView/CategoryView";
import FooterInfo from "./Home/FooterInfo";
import Home from "./Home/Home";
import Login from "./Login";
import Navbar from "./Navbar/Navbar";
import ProductDetail from "./ProductDetail/ProductDetail";
import Register from "./Register";
import Search from "./Search/Search";
import Cart from "./Cart/Cart";
import VoucherList from "./VoucherPage/VoucherList";
import UserInfo from "./ChangeInfo/ChangeUserInfo";
import ChangePassword from "./ChangeInfo/ChangeUserPassword";
import ConfirmOrder from "./Confirm/ConfirmOrder";
import Report from "./Report/Report";
import OrderList from "./OrderList/OrderList";
import NotFound from "./NotFound";
import OrderDetail from "./OrderList/OrderDetail";


const UserApp = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="user-app d-flex flex-column">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/category/:category" element={<CategoryView />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/vouchers" element={<VoucherList />} />

                <Route path="/search" element={<Search />} />

                <Route path="/login" element={ user ? <Navigate to='/' /> : <Login />} />
                <Route path="/register" element={ user ? <Navigate to='/' /> : <Register />} />

                <Route path="/cart" element={ user ? <Cart /> : <Navigate to='/login' />} />
                <Route path="/confirm" element={ user ? <ConfirmOrder /> : <Navigate to='/login' />} />

                <Route path="/changeInfo" element={ user ? <UserInfo /> : <Navigate to='/login' />} />
                <Route path="/changePassword" element={ user ? <ChangePassword /> : <Navigate to='/login' />} />

                <Route path="/report" element={ user ? <Report /> : <Navigate to='/login' />} />

                <Route path="/myOrders" element={ user ? <OrderList /> : <Navigate to='/login' />} />
                <Route path="/myOrders/:id" element={ user ? <OrderDetail/> : <Navigate to='/login' />} />

                <Route path='*' element={<NotFound />} />
            </Routes>

            <Routes>
                <Route path="/" element={<FooterInfo />} />
            </Routes>
        </div>
    );
}

export default UserApp;

/* 
DESCRIPTION FOR ALL THE PATHS:
    - /                     : Homepage - showing all categories, new arrivals, best sellers, and voucher
    - /optionA              : Testing
    - /optionB              : Testing
    - /category/:category   : When user clicks on a category from homepage, will proceed to show all products of that category
    - /product/:id          : Show detail information of the product
    - /vouchers             : Show all vouchers

    - /cart                 : View cart
    - /confirm              : Confirm the order

    - /changeInfo           : Change user's contact information
    - /changePassword       : Change user's password

    - /report               : Leave a report for admin
    - /myOrders             : List all orders
    - /myOrders/:id         : View detail information for an order
*/