import React from 'react';
// import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/style.css';
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return(
    <nav className="navbar navbar-dark bg-dark fixed-top">
        <form className="input-group p-2 m-1 ms-3 invisible-xs search" action="">
            <input className="form-control" type="text" placeholder="Search here"></input>
            <button className="btn btn-dark btn-outline-info"><i className="fa-solid fa-magnifying-glass "></i> Search</button>
        </form>
        <button className="navbar-toggler border border-2 btn btn-outline-info m-1 me-3" data-bs-toggle="collapse" data-bs-target="#myNavbar">
            <span className="navbar-toggler-icon text-white p-3"></span>
        </button>
        <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="navbar-nav bg-dark text-center">
                <li className="nav-item hover-big hover-gradient">
                    <NavLink to="/" className="nav-link p-4 active text-info"> <h3>Home</h3> </NavLink>
                </li>
                <li className="nav-item hover-big hover-gradient ">
                    <NavLink to="/Manga" className="nav-link p-4 text-info"><h3>Chapter List</h3></NavLink>
                </li>
                <li className="nav-item hover-big hover-gradient">
                    <NavLink to="/Reader" className="nav-link p-4 active text-info"><h3>Manga Reader</h3></NavLink>
                </li>
                <li className="nav-item mx-auto d-block d-sm-none">
                    <form className="input-group p-2 m-1 search" action="">
                        <input className="form-control" type="text" placeholder="Search here"/>
                        <button className="btn btn-dark btn-outline-info"><i className="fa-solid fa-magnifying-glass"></i>   Search </button>
                    </form>
                </li>
            </ul>
        </div>
    </nav>
    );
   }
   
   export default Navbar;