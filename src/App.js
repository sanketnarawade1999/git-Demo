import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Addtask from "./Components/Addtask";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Updatetask from "./Components/Updatetask";
import AdminPanel from "./Components/AdminPanel";
import Employeetask from "./Components/Employeetask";



function App() {
  return (
    <Router>
      <ToastContainer position="top-center" />
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/user/employee" element={<Signup />} />
        <Route path="/addtask" element={<Addtask />} />
        <Route path="/user/admin/showtask" element={<AdminPanel />} />
        <Route path="/user/employee/showtask" element={<Employeetask />} />

        <Route path="/updatetask" element={<Updatetask />} />

      </Routes>
    </Router>
  );
}

export default App;
