import React,{useEffect,useState} 
from "react";
import "./account.css";
import Nav 
from "../nav_account/Nav";
import axios 
from "axios"; 
import { useNavigate } 
from "react-router-dom";
import {HashLink as Link } 
from "react-router-hash-link";




function Account () {
    let navigate = useNavigate();
    let navigate_2=useNavigate();
    
    axios.interceptors.request.use(
        config=>{
            config.headers.authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyMzM0MTIyLCJpYXQiOjE2NTIyOTgxMjIsImp0aSI6IjZlZjk2Mjg4NzgwNzRmMmFiMTFiYjQ5MTRhZDc5OTEyIiwidXNlcl9pZCI6IjQ4ZWYyMGU3LWQwNWItNGYxMS1iZmUxLTFhMTU1MjFkNDA3OSJ9.JqiiOl8hrx7VDiytxZVNwPhnuXj7dd3CqDXKrri-GFw'
            return config
        },
        error=>{
            return Promise.reject(error);
        }
    )
// for uploead image
    let formData = new FormData();
    const [image,setimage]=useState({profile_picture:""})

    formData.append("profile_picture",image)

    

    useEffect(()=>{
        axios.put('http://localhost:8000/users/profile',{formData}).then(res=>{
            setimage(res.profile_picture)
        console.log(res)
    })
    .catch((err)=>
    console.log(err)
    )});




    const [data,setData]=useState([])



    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/users/profile').then(response=>{
        console.log(response)
        setData(response['data'])})
        .catch((err)=>
        console.log(err))
    },[]);
    

    
    return(
        <div className="account_page" id="account">
             <nav className="navbar_1">
            <ul className="navbar_list_1">
            <Link to="/" className="link">
            <li className="list_item_1">Home</li></Link>


            <li className="list_item_1" onClick={()=>{navigate_2("/My")}}>Conferences</li>


           <Link to="/#footer" smooth className="link">
           <li className="list_item_1">About us</li></Link>
           <Link to="/#footer"  smooth className="link">
           <li className="list_item_1" >Contact us</li> </Link>
           
           <li className="list_item_1" onClick={()=>{navigate("/account")}}>Account</li>


           
            </ul>
        </nav>

            <div className="container_acc">
                <div className="container_acc_l">
                    <div className="container_acc_l_logo">
                        <div className="image_account">
                        
                        <input type="file" accept="file"  id="input"  v
                        onChange={(e)=>{setimage(e.target.value)}}
                        />
                        </div>
                    </div>
                    <div className="container_acc_l_info">
                        {data.data?.map((prfl)=>
                        <div>
                            <h1>{prfl.first_name}</h1>

                        </div>
                        )}
                    </div>
                </div>



                <div className="container_acc_r">
                    <Nav/>

                    <div className="container_conf">
                        hhhhhhhhh
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Account