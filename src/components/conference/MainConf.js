import React, { useEffect, useState } from "react";
import "./MainConf.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import {conferences} from "./data";
import {HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";


function MainConf() {
  let navigate_2=useNavigate();
  let navigate = useNavigate();
  const [confs, setConfs] = useState(conferences);
  useEffect(() => {
    console.log("test");
  }, []);
  
  return (
    <>
    <div class="header">
  <h2>Conferences</h2>
</div>
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
      <div className="dv">
        <button className="btn" onClick={()=>navigate("/CreateCOnf")}>
          {" "}
          <p className="txt">Create Conference</p>
        </button>
        <button className="search   ">
          <SearchIcon fontSize="large"></SearchIcon>
        </button>
        <input type="text" className="inp" placeholder="Search">
        </input>
        <button className="filter">
          <FilterListIcon fontSize="large"></FilterListIcon>
          {/* <ReorderIcon fontSize="large"></ReorderIcon> */}
        </button>
      </div>
      <div className="originalConf">
          {confs.map((conf) => {
            const{id} = conf;
            return (
              
        <div className="confDiv" key={id}>
              <div className="test">
                  <div className="title">{conf.title}</div>

                <div className="host">
                   Hosted by {conf.host}, Location - {conf.startDate} to {conf.endate}
                   </div>

                <div className="category"> Category: {conf.category}</div>

              </div>
                

                <img className="image" src={conf.photo} alt={conf.photo} />
      </div>

              
            );
          })}
        </div>
    </>
  );
}

export default MainConf;
