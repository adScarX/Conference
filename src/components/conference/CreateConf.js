import "./CreateConf.css";
import "./MainConf.css"
import React, { useEffect, useState } from "react";
import { useNavigate } 
from "react-router-dom";
import {HashLink as Link } 
from "react-router-hash-link";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {conferences} from "./data.js"
import {users} from "./data.js"
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import { format, parseISO } from 'date-fns';

import { ReactDialogBox } from 'react-js-dialog-box';
import 'react-js-dialog-box/dist/index.css'
import Popup from "./Popup.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function CreateConf(){
  const[open , setOpen]=useState(false);
  const switche =()=>{
    setOpen(!open)
  }
  const [confs, setConfs] = useState(conferences);
  const reviewer = {
    id: "605f7435-6edf-4d2c-a141-6192e7c1f0a4",
    first_name: "hfdubrd",
    family_name: "string",
    email: "user@example.com",
    phone_number: "string",
    full_adress: "string",
    linked_in_username: "string",
    fields_of_interssts: "string",
    bio: "this is bio",
    profile_picture: "http://127.0.0.1:8000/media/profile_pictures/consult-declar_nKXwXRI.png",
    is_admin: false
  }
  const[reviewers, setReviewers] = useState(
    [
      {
    id: "605f7435-6edf-4d2c-a141-6192e7c1f0a4",
    first_name: "hfdubrd",
    family_name: "string",
    email: "user@example.com",
    phone_number: "string",
    full_adress: "string",
    linked_in_username: "string",
    fields_of_interssts: "string",
    bio: "this is bio",
    profile_picture: "http://127.0.0.1:8000/media/profile_pictures/consult-declar_nKXwXRI.png",
    is_admin: false
  }
    ]
  // users
    


  )

  let navigate = useNavigate();
    let navigate_2=useNavigate();
    const [textarea, setTextarea] = useState('');

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  const handleUpload = (event)=>{
    console.log(event.target.files[0])
   const fileUploaded = event.target.files[0];
   console.log(fileUploaded)
  }

  const hiddenFileInput = React.useRef(null);

  

  const handleClick = (event) => {
    hiddenFileInput.current.click();
    

  };
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();

    const handleDate = (date)=>{
      setStartDate(date)
      console.log(date)
      var x = format(date, 'yyyy-MM-dd hh:mm:ss.sss')
      console.log(x)

    }

    const handleEndDate = (date)=>{
      setEndDate(date)
      console.log(date)
    }

    return(
        <main>
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
        <DatePicker   className="dates" placeholderText="Start date"
         selected={startDate}
          onChange={handleDate}/>
        <DatePicker  className="dates" placeholderText="End date"
         selected={endDate}
          onChange={handleEndDate}/>
        </div>
        <div className="inp3">
          <DatePicker
          showFullMonthYearPicker="true"
             className="dates" placeholderText="Submition start date"
         selected={startDate}
          onChange={handleDate}/>
        <DatePicker 
         allowSameDay="false"  className="dates" placeholderText="Submition deadline"
         selected={endDate}
          onChange={handleEndDate}/>
        </div>
        <input type="text" className="inp2" placeholder="Conference location"/>

        <input type="text" className="inp2" placeholder="Conference site"/>



        <button className="inp2" onClick={handleClick} >
            <p className="upload">Conference logo (image) <span></span> {<CloudUploadOutlinedIcon fontSize="large"/>}</p> 
        </button>
        <input ref={hiddenFileInput} type="file" onChange={handleUpload} style={{display:'none'}}>
        </input>

        <div className="originalReviewer">
          
          {reviewers.map((reviewer) => {
            return (
              <>
        <div className="userDiv">
              <div className="test">
                  <div className="title">{reviewer.first_name}</div>

                <div className="host">
                   Hosted by {reviewer.id}, Location - {reviewer.linked_in_username} to {reviewer.id}
                   </div>

                <div className="category"> Category: {reviewer.family_name}</div>

              </div>
                

                <img className="image" src={reviewer.profile_picture} alt={reviewer.profile_picture} />
      </div>

              </>
            );
          })}
          <button className="add" onClick={switche} >
            <AddOutlinedIcon fontSize="large" />
          </button>
        </div>
      <button className="btn" ><p className="txt">Create Conference</p></button>
      
      </div>


<Popup trigger={open}>
              <h3>Test test</h3>
            </Popup>
        </main>
    )
}
export default CreateConf