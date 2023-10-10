import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div class="container-fluid">
          <label className="navbar-brand dashboard " href="#">
            <h2>Dashboard</h2>
          </label>

          <div
            className="collapse navbar-collapse d-flex flex-row-reverse "
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/addtask"} className="nav-link" >
                  Add-Task
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/user/admin/showtask"} className="nav-link" >
                  Admin Panel
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/user/employee/showtask"} className="nav-link" >
                  Show-Task Employee
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/login"} className="nav-link" >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/user/employee"} className="nav-link" >
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
