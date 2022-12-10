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


const UserApp = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className="user-app d-flex flex-column">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/category/:category" element={<CategoryView />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/vouchers" element={<div>Get your voucher here</div>} />

                <Route path="/search" element={<Search />} />

                <Route path="/login" element={ user ? <Navigate to='/' /> : <Login />} />
                <Route path="/register" element={ user ? <Navigate to='/' /> : <Register />} />

                <Route path="/cart" element={ user ? <Cart /> : <Navigate to='/login' />} />
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
*/