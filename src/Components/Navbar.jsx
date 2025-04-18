import React from "react";
import "./Navbar.css";
import logo from "../img/—Pngtree—article blog story typewriter writer_4357929.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-links">
            <Link className="link" to="/?cat=art" ><h6>ART</h6></Link>
            <Link className="link" to="/?cat=art" ><h6>SCIENCE</h6></Link>
            <Link className="link" to="/?cat=art" ><h6>TECHNOLOGY</h6></Link>
            <Link className="link" to="/?cat=art" ><h6>CINEMA</h6></Link>
            <Link className="link" to="/?cat=art" ><h6>DESIGN</h6></Link>
            <Link className="link" to="/?cat=art" ><h6>FOOD</h6></Link>
            <span>Adithyan</span>
            <span>Logout</span>
            <span className="write">
                <Link to="/write">Write</Link>
            </span>
        </div>
      </div>
    </nav>   
  );
};

export default Navbar;
