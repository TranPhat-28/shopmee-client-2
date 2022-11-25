import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'
import Home from "./Home";
import OptionA from "./OptionA";
import OptionB from "./OptionB";
import Login from "./Login";
import Register from "./Register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/optionA" element={<OptionA />} />
          <Route path="/optionB" element={<OptionB />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
