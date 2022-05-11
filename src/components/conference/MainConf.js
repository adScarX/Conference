import Navbar from "../navbar/Navbar";
import React, { useEffect, useState } from "react";
import "./MainConf.css";
import FilterListIcon from "@mui/icons-material/FilterList";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import { data } from "./data";
import {HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";



function MainConf() {
  let navigate = useNavigate();
  const [confs, setConfs] = useState(data);
  useEffect(() => {
    console.log("test");
  }, []);
  return (
    <>
      <Navbar />
      <div className="dv">
        <button className="btn" onClick={()=>navigate("/CreateCOnf")}>
          {" "}
          <p className="txt">Create Conference</p>
        </button>
        <button className="search   ">
          <SearchIcon fontSize="large"></SearchIcon>
        </button>
        <input type="text" className="inp" placeholder="   Search">
        </input>
        <button className="filter">
          <FilterListIcon fontSize="large"></FilterListIcon>
          {/* <ReorderIcon fontSize="large"></ReorderIcon> */}
        </button>
      </div>
      <div className="originalConf">
          {confs.map((conf) => {
            return (
              <>
        <div className="confDiv">
              <div className="test">
                  <div className="title">{conf.title}</div>

                <div className="host">
                   Hosted by {conf.host}, Location - {conf.startDate} to {conf.endate}
                   </div>

                <div className="category"> Category: {conf.category}</div>

              </div>
                

                <img className="image" src={conf.photo} alt={conf.photo} />
      </div>

              </>
            );
          })}
        </div>
    </>
  );
}

export default MainConf;
