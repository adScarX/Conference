import "./CreateConf.css";
import React, { useEffect, useState } from "react";
import { useNavigate } 
from "react-router-dom";
import {HashLink as Link } 
from "react-router-hash-link";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';


function CreateConf(){
  let navigate = useNavigate();
    let navigate_2=useNavigate();
    const [textarea, setTextarea] = useState(
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  const handleChangee = (event)=>{
    console.log(event)
  }

    return(
        <>
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
      <div className="principalDiv">
          <h1 className="crtext">Create new conference</h1>
          <input type="text" className="inp2" placeholder="Conference title">
        </input>
        <textarea className="spec" value={textarea} onChange={handleChange} placeholder="Description" />
        <input type="text" className="inp2" placeholder="Name of Host"/>
        <input type="text" className="inp2" placeholder="Categories">
        </input>
        <div className="inp3">
            <input type="text" className="dates" placeholder="Start date"/>
        <input type="text" className="dates" placeholder="End date"></input>
        </div>
        <input type="text" className="inp2" placeholder="Conference location"/>

        <input type="text" className="inp2" placeholder="Conference site"/>

        <div className="inp3" >
        {/* <input type="text" className="inp2" placeholder="Conference logo (image)"/> */}
        {/* <button className="search2" title="Upload">
            Upload Conference logo
            <CloudUploadOutlinedIcon></CloudUploadOutlinedIcon>
        </button> */}

        <input type="file" onChange={()=>handleChange} />
        </div>

        

      </div>
      <></>

        </>
    )
}
export default CreateConf