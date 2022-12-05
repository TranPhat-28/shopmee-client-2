import { Routes, Route } from "react-router-dom";
import CategoryView from "./CategoryView/CategoryView";
import Home from "./Home/Home";
import Login from "./Login";
import Navbar from "./Navbar/Navbar";
import OptionA from "./Navbar/OptionA";
import OptionB from "./Navbar/OptionB";
import ProductDetail from "./ProductDetail/ProductDetail";
import Register from "./Register";


const UserApp = () => {
    return (
        <div className="user-app d-flex flex-column">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/optionA" element={<OptionA />} />
                <Route path="/optionB" element={<OptionB />} />

                <Route path="/category/:category" element={<CategoryView />} />
                <Route path="/product/:id" element={<ProductDetail />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
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
*/