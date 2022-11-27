import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Navbar from "./Navbar";
import OptionA from "./OptionA";
import OptionB from "./OptionB";
import Register from "./Register";


const UserApp = () => {
    return (
        <div className="user-app">
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/optionA" element={<OptionA />} />
                <Route path="/optionB" element={<OptionB />} />

                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>            
        </div>
    );
}

export default UserApp;