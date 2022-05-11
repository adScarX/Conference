import React from "react";
import { useNavigate } from "react-router-dom";
import './Navbar.css' 
import {HashLink as Link } from "react-router-hash-link";



function Navbar (){
    let navigate = useNavigate();
    let navigate_2=useNavigate();

    return(
        <nav className="navbar_1">
            <ul className="navbar_list_1">
            <Link to="/" className="link">
            <li className="list_item_1">Home</li></Link>


            <li className="list_item_1" onClick={()=>{navigate_2("/MainConf")}}>Conferences</li>


           <Link to="/#footer" smooth className="link">
           <li className="list_item_1">About us</li></Link>
           <Link to="/#footer"  smooth className="link">
           <li className="list_item_1" >Contact us</li> </Link>
           
           <li className="list_item_1" onClick={()=>{navigate("/account")}}>Account</li>


           
            </ul>
        </nav>
        

    )
}

export default Navbar