import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminApp from "./components/Admin/AdminApp"
import UserApp from "./components/User/UserApp"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserApp />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;

/* 
App is an container component to switch between user and admin
*/

/*
<BrowserRouter>
        <Routes>
          <Route path="/*" element={<UserApp />} />
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
*/