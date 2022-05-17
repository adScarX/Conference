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
<<<<<<< HEAD
import {data_1} from "./data"
=======
<<<<<<< HEAD
import {data_1} 
from "./data"
=======
<<<<<<< HEAD
import {conferences} from "./../conference/data"
=======
import {data_1} from "./data"
>>>>>>> a9d6159a94237ccc5079aac6c6b6376e39d42ee8
>>>>>>> 7acb18d1a01752329f04fb01ad3133148bdd6209
>>>>>>> df1e668f9c4f130548f22205ff9c4f82d65a5dec
import "./../conference/MainConf.css"
import image_1 
from "./../../img/email.png"
import image_phone from 
"./../../img/phone-call.png"
import image_linkdin 
from "./../../img/linkedin.png"

function Account () {
    let navigate = useNavigate();
    let navigate_2=useNavigate();
    
    axios.interceptors.request.use(
        config=>{
            config.headers.authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNjEwMTc5LCJpYXQiOjE2NTI1NzQxNzksImp0aSI6ImJmMGU0ZWRmMjAxOTQ4OWViZGY1NGQ0NTA2M2U4Y2UwIiwidXNlcl9pZCI6IjQ4ZWYyMGU3LWQwNWItNGYxMS1iZmUxLTFhMTU1MjFkNDA3OSJ9.xwb2QCz0vXWnUQD78m_suzlHl0lPnk55q9DiGuufjNA'
            return config
        },
        error=>{
            return Promise.reject(error);
        }
    )
    let host="http://127.0.0.1:8000"
    

// for upload image
    const uploadImage=({target:{files}})=>{
            const data = new FormData()
            data.append('profile_picture',files[0])
            axios.put('http://127.0.0.1:8000/users/profile',
            data
        )
        .then(res=>{
            console.log('here_pic')
        })
    }
    const [data_profile,setdata_profile]=useState({})


        useEffect(()=>
        {
            axios.get(
                'http://127.0.0.1:8000/users/profile'
            ).then(reponse=>
                {
                    console.log(reponse.data);
                    setdata_profile(reponse.data);
                }).catch(err=>{
                    console.log('here2');
                })
        },[])
    


    const [confs, setConfs] = useState(data_1);
  useEffect(() => {
    console.log("test");
  }, []);

    
    return(
        <div className="account_page" id="account">
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

            <div className="container_acc">
                <div className="container_acc_l">






{/*  ////////////////////////////// */}

                    <div className="container_acc_l_logo">
                        <div className="form-controll">
                            <input 
                            type="file"
                            accept=".png"
                            onChange={uploadImage}
                            name='file_up'
                            />
                        </div>
                        <img src={host+data_profile.profile_picture} alt={data_profile.profile_picture}/>
                        
                    </div>

                    




{/* //////////////////////////////////////////////////// */}

                    <div className="container_acc_l_info">
<<<<<<< HEAD
=======
<<<<<<< HEAD
                        <div className="profile_info_sta">
                       <h1>{data_profile.family_name}  {data_profile.first_name}</h1>
                       <h6>{data_profile.bio}</h6>
                       </div>
                       <div className="profile_info_det">
                           <div className="profile_info_det_div">
                               <div className="profile_info_det_div1">
                                   <img src={image_1} alt={image_1}/>
                               </div>
                               <div className="profile_info_det_div2">
                               <h3>{data_profile.family_name}</h3>
                               </div>
                           </div>
                           <div className="profile_info_det_div">
                               <div className="profile_info_det_div1">
                                   <img src={image_phone} alt={image_phone}/>
                               </div>
                               <div className="profile_info_det_div2">
                               <h3>{data_profile.phone_number}</h3>
                               </div>
                           </div>
                           <div className="profile_info_det_div">
                               <div className="profile_info_det_div1">
                                   <img src={image_linkdin} alt={image_linkdin}/>
                               </div>
                               <div className="profile_info_det_div2">
                               <h3>{data_profile.linked_in_username}</h3>
                               </div>
                           </div>
                           <div className="profile_info_det_div">
                               <div className="profile_info_det_div1">
                                   <img src={image_1} alt={image_1}/>
                               </div>
                               <div className="profile_info_det_div2">
                               <h2>{data_profile.family_name}</h2>
                               </div>
                           </div>
                       </div>

=======
<<<<<<< HEAD
                        {conferences.data?.map((prfl)=>
                        <div>
                            <h1>{prfl.first_name}</h1>

                        </div>
                        )}
=======
>>>>>>> a9d6159a94237ccc5079aac6c6b6376e39d42ee8
>>>>>>> 7acb18d1a01752329f04fb01ad3133148bdd6209
>>>>>>> df1e668f9c4f130548f22205ff9c4f82d65a5dec
                    </div>
                </div>



                <div className="container_acc_r">
                    <Nav/>

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

                </div>
            </div>

        </div>
    )
}

export default Account