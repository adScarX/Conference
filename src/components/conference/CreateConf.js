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
import axios from "axios"


import { format, parseISO } from 'date-fns';

import { ReactDialogBox } from 'react-js-dialog-box';
import 'react-js-dialog-box/dist/index.css'
import Popup from "./Popup.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import getTime from "date-fns/getTime";
import { EmojiObjects, Password } from "@mui/icons-material";

 let reviewerNumber = 0;
 let reviewerIds=[]
 let submitError = false;
 let index = 0;
 let isSubmit = false;

function CreateConf(){
  axios.interceptors.request.use(
      config => {
          config.headers.authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzMDg5MDczLCJpYXQiOjE2NTMwNTMwNzMsImp0aSI6Ijc2NjZhYjc2Y2I1ZTRmOGM5ZjI0YWI4NDNjYjZkNDhiIiwidXNlcl9pZCI6IjYwNWY3NDM1LTZlZGYtNGQyYy1hMTQxLTYxOTJlN2MxZjBhNCJ9.plAa06eGXeJzF4XCd3H_Wfe6BawzsI-3XITZkx7lDqk'
          return config
       },
       error =>{
          return Promise.reject(error);
      })
  const initialValues = {
    title:"",
    hostName:"",
    categories:"",
    location:"",
    site:""
  }
  const [formValues , setFormValues] = useState(initialValues)
  const [formErrors , setFormErrors] = useState({})
  const [dateErrors , setDateErrors] = useState({})
  const [descErrors , setDescErrors] = useState('')
  const[reviewerTotal, setReviewerTotal]=useState('')
  
  const removeItem = (id) => {
    if(reviewerNumber < 3){
      let candidate = candidates.filter((x)=> x.id ==id);
    let newUsers = candidates.filter((y) => y.id !== id);
    setCandidates(newUsers);
    reviewers.push(candidate[0]);
    reviewerIds.push(candidate[0].id)
    reviewerNumber++;
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
    reviewerNumber -- 
    reviewerIds.pop(candidate[0].id)
  };

  let test='';

  const switche =()=>{
    setShowReview(! showReview)
    setError(false)
  }

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
    

    const handlesDate = (date)=>{
      setStartDate(date)
      console.log(date)
      var x = format(date, 'yyyy-MM-dd hh:mm:ss.sss')
      console.log(x)

    }

    const handleEDate = (date)=>{
      setEndDate(date)
    }
    const handlesubSd = (date)=>{
      setsubSd(date)
    }
    const handlesubDead = (date)=>{
      setsubDead(date)
    }
     const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [subSd, setsubSd] = useState();
    const [subDead, setsubDead] = useState();

    

    const handle = (e) =>{
      const {name,value} = e.target;
      setFormValues({...formValues, [name]:value});

    }


    const handleSubmit =(e) =>{
      isSubmit = true
      e.preventDefault();
      setFormErrors(validateTextFields(formValues))
      setDateErrors(validateDates(startDate,endDate,subSd,subDead))
      setDescErrors(validateDesc(textarea))
      setReviewerTotal(validateReviewers(reviewerNumber))
      
    }
   

    const validateTextFields =(values) =>{
      const errors ={};

      if(!values.title){
        errors.title = '* Title is required'
      }
      if(!values.hostName){
        errors.hostName = '* Host name is required'
      }
      if(!values.categories){
        errors.categories = '* At least one category is required'
      }
      if(!values.site){
        errors.site = '* Conference site is required'
      }
      if(!values.location){
        errors.location = '* Location is required'
      }
      return errors

    }

    const validateDesc = (desc)=>{
      let descError = '';

      if(!desc){
        descError = '* Description is required'
      }
      if(desc.split(' ').length > 500){
        descError = '* Description has to be under 500 words'
      }

      return descError
    }

    const validateReviewers = (reviewerNumber)=>{
      let error ='';
      if(reviewerNumber == 0){
        error = '* At least one reviewer'
      }
      if(reviewerNumber > 3){
        error = '* 3 reviewers at most '
      }

      return error;
    }

    const validateDates = (sDate, eDate,submitionSd,submitionDead)=>{
      const dateEr = {};

      if(!sDate){
        dateEr.startDate = "* Start date is required"
      }
      if(!eDate){
        dateEr.endDate = "* End date is required"
      }
      if(!submitionSd){
        dateEr.submitionSd = "* Submition start date is required"
      }
      if(!submitionDead){
        dateEr.submitionDead = "* Submition deadline is required"
      }

      if(sDate > eDate){
        dateEr.startDate='* Start date is after end date'
        dateEr.endDate = '* End date is before start date'
      }
      if(submitionSd > sDate){
        dateEr.startDate = '* Start date is before submittion date'
        dateEr.submitionSd ="* Submition date is after start date"
      }
      if(submitionDead > sDate){
        dateEr.startDate = '* Start date is before submition deadline'
        dateEr.submitionDead = '* Deadline is after start date'
      }
      if(submitionDead < submitionSd){
        dateEr.submitionSd = '* Submition start date is after deadline'
        dateEr.submitionDead='* Deadline is before submition date'
      }


      return dateEr;

      // if()
    }

    useEffect(()=>{
      console.log(index)
      if(Object.keys(formErrors).length !== 0 ||
      Object.keys(dateErrors).length !== 0 ||
      descErrors.length !==0 ||
      reviewerTotal.length !==0){
        console.log('here1')
        submitError = true
      }else{
        console.log('here2')
        submitError = false
      }

      if(! submitError && index > 0){
        console.log('success')
        let  bodyFormData = new FormData();
          bodyFormData ={
          title:formValues.title.toString(),
          
          description:textarea.toString(),
          
          name_of_host:
          formValues.hostName.toString(),
          categories:
          formValues.categories.toString(),
          start_date:
          format(startDate, 'yyyy-MM-dd hh:mm:ss.sss'),
          end_date:
          format(endDate, 'yyyy-MM-dd hh:mm:ss.sss'),
          submition_deadline:
          format(subDead, 'yyyy-MM-dd hh:mm:ss.sss'),
          start_submition_date:
          format(subSd, 'yyyy-MM-dd hh:mm:ss.sss'),
          logo:null,
          location:
          formValues.location.toString(),
          site:
          formValues.site.toString(),
          reviewers:
          reviewerIds
        }
        // console.log(bodyFormData)
        try {
          axios.post('http://127.0.0.1:8000/conferences/',
        bodyFormData,
        // data
        //  {headers: {
        //         // 'Accept': 'application/json',
        //         'Content-Type': 'application/json,image'
        //       }}
        ).then((response)=>{
          console.log(response['data'])
        })
        } catch (error) {
        }        
      }else if(submitError){
        console.log('failure')
      }

      isSubmit = false;
      index ++;

    },[isSubmit]);

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
      <div className="testDiv">
          <h1 className="crtext">Create new conference</h1>
          <form className="principalDiv" onSubmit={handleSubmit}>
            <input name="title" type="text" className="inp2" placeholder="Conference title" value={formValues.title} onChange={handle}>
        </input>
        <p className="pp">{formErrors.title}</p>
        <textarea name="description" className="spec" value={textarea} onChange={handleChange} placeholder="Description" />
        <p className="pp">{descErrors}</p>
        <input name="hostName" type="text" className="inp2" placeholder="Name of Host" value={formValues.hostName} onChange={handle}/>
        <p className="pp">{formErrors.hostName}</p>

        <input name="categories" type="text" className="inp2" placeholder="Categories" value={formValues.Categories} onChange={handle}>

        </input>
        <p className="pp">{formErrors.categories}</p>

        <div className="inp3">
          <div className="datehandling">
            <DatePicker   className="dates" placeholderText="Start date"
          name="sDate"
         selected={startDate}
          onChange={handlesDate}
          // value={formValues.startDate}
          />
          
          <p className="pp">{dateErrors.startDate}</p>
          </div>
        <div className="datehandling">
          <DatePicker  className="dates" placeholderText="End date"
        name="eDate"
         selected={endDate}
          onChange={handleEDate}
          // value={formValues.endDate}
          />
          <p className="pp">{dateErrors.endDate}</p>
          
        </div>
        </div>
        <div className="inp3">
          <div className="datehandling">
            <DatePicker
          name="subSD"
          className="dates" placeholderText="Submition start date"
          selected={subSd}
          onChange={handlesubSd}
          // value={formValues.submitionSD}
          />
          <p className="pp">{dateErrors.submitionSd}</p>
          
          </div>
        <div className="datehandling">
          <DatePicker 
        name="subDead"
           className="dates" placeholderText="Submition deadline"
         selected={subDead}
          onChange={handlesubDead}
          // value={formValues.submitiondead}
          />
          <p className="pp">{dateErrors.submitionDead}</p>
          
        </div>
        </div>
        <input name="location" type="text" className="inp2" placeholder="Conference location" value={formValues.location} onChange={handle}/>
        <p className="pp">{formErrors.location}</p>

        <input name="site" type="text" className="inp2" placeholder="Conference site" value={formValues.site} onChange={handle}/>
        <p className="pp">{formErrors.site}</p>

        {/* <button >hiihaha</button> */}
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
            <input type="text"  className="searchBar" placeholder="Search for reviewers" >
        </input>
          </div>
          
            }
            {
        error &&
        <div className="error">
        <p>You cannot choose more than 3 reviewers</p>
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

        <p className="pp">{reviewerTotal}</p>
        

      
      <button type="submit" className="btn" ><p className="txt">Create Conference</p></button>
          </form>
      
      </div>


{/* <Popup trigger={open}>
              <h3>Test test</h3>
            </Popup> */}
        </main>
    )
}
export default CreateConf

