import { Routes, Route } from "react-router-dom";
import CategoryView from "./CategoryView";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import OptionA from "./OptionA";
import OptionB from "./OptionB";
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

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>            
        </div>
    );
}

export default UserApp;