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
import {confreviewers} from "./data.js"
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import SearchIcon from "@mui/icons-material/Search";


import { format, parseISO } from 'date-fns';

import { ReactDialogBox } from 'react-js-dialog-box';
import 'react-js-dialog-box/dist/index.css'
import Popup from "./Popup.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

 let reviewerNumber = 0;
 let reviewerIds=[]

function CreateConf(){
  
  const removeItem = (id) => {
    if(reviewerNumber < 3){
      console.log('here')
      let candidate = candidates.filter((x)=> x.id ==id);
    let newUsers = candidates.filter((y) => y.id !== id);
    setCandidates(newUsers);
    reviewers.push(candidate[0]);
    reviewerIds.push(candidate[0].id)
    reviewerNumber++;
    console.log(reviewerNumber)
    }else{
      setError(true)
    }
    
    // setReviewers(confreviewers,candidate[0])
    // reviewers.push(candidate)
  };
  const removeReviewer = (id) => {
    let candidate = reviewers.filter((x)=> x.id ==id);
    let newUsers = reviewers.filter((y) => y.id !== id);
    setReviewers(newUsers);
    candidates.push(candidate[0])
    // setReviewers(confreviewers,candidate[0])
    // reviewers.push(candidate)
  };

  let test='';

  const search = (name)=>{
    let searchedList = candidates.filter((candidate)=>candidate.name == candidate.name.search(name))
    setCandidates(searchedList)
  }
  // const[open , setOpen]=useState(false);

  // const[add,setAdd] = useState(true)



  const switche =()=>{
    setShowReview(! showReview)
    setError(false)
  }
  // const [confs, setConfs] = useState(conferences);

  const[showReview,  setShowReview] = useState(true);
  const[candidates, setCandidates] = useState(users);
  const [error,setError] = useState(false)
 
  const[reviewers, setReviewers] = useState(
    // confreviewers
    []
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
          { ! showReview &&
           <div className="searchReviewer">
            <button className="search">
          <SearchIcon fontSize="large"></SearchIcon>
        </button>
            <input type="text" value={test} className="searchBar" placeholder="Search for reviewers" onChange={console.log(test)}>
        </input>
          </div>
            }
          
          {
              ! showReview &&
          candidates.map((user) => {
            const {id} = user;
            return (
              
              
        <div className="userDiv" key={id}>
              <div className="test">
                  <div className="title">{user.first_name}</div>

                <div className="host">
                   Hosted by {user.id}, Location - {user.linked_in_username} to {user.id}
                   </div>

                <div className="category"> Category: {user.family_name}</div>

                <div className="addremove">
                  <button className="btn2"
                   onClick={()=>removeItem(id)}
                  > <p>Add</p> </button>
                </div>

              </div>
              
                <img className="image" src={user.profile_picture} alt={user.profile_picture} />
      </div>

              
            );
          })}

          {
               showReview &&
          reviewers.map((reviewer) => {
            const {id} = reviewer;
            return (
              
        <div className="userDiv" key={id}>
              <div className="test">
                  <div className="title">{reviewer.first_name}</div>

                <div className="host">
                   Hosted by {reviewer.id}, Location - {reviewer.linked_in_username} to {reviewer.id}
                   </div>

                <div className="category"> Category: {reviewer.family_name}</div>

                {/* <div className="addremove"> */}
                  <button className="removebtn"
                   onClick={()=>removeReviewer(id)}
                  ><p>Remove</p>  </button>
                {/* </div> */}
                

              </div>
              
                <img className="image" src={reviewer.profile_picture} alt={reviewer.profile_picture} />
      </div>

              
            );
          })}

          
          { showReview &&
          <button className="add" onClick={switche} >
            <AddOutlinedIcon fontSize="large" />
          </button>}

        {! showReview && <button className="btn3" onClick={switche} ><p>DONE</p></button>}

          
        </div>

      {
        error &&
        <div className="error">
        <p>You cannot choose more than 3 reviewers</p>
      </div>
      }
      <button className="btn" ><p className="txt">Create Conference</p></button>
      
      </div>


{/* <Popup trigger={open}>
              <h3>Test test</h3>
            </Popup> */}
        </main>
    )
}
export default CreateConf

