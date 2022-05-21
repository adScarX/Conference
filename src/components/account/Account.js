import React,{useEffect,useState,useRef} 
from "react";
import { useParams } 
from "react-router-dom";
import "./account.css";
import Nav 
from "../nav_account/Nav";
import axios 
from "axios"; 
import { useNavigate } 
from "react-router-dom";
import {HashLink as Link } 
from "react-router-hash-link";
import {data_1} 
from "./data"
import image_1 
from "./../../img/email.png"
import image_phone from 
"./../../img/phone-call.png"
import image_linkdin 
from "./../../img/linkedin.png"
import fileDownload from 'js-file-download'



function Account () {
    let navigate = useNavigate();
    let navigate_2=useNavigate();
    
    axios.interceptors.request.use(
        config=>{
            config.headers.authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzMTEyNDI2LCJpYXQiOjE2NTMwNzY0MjYsImp0aSI6ImMzYTlmYzIwMmM4MDRiOWFhNjUxNmQ2NjIzYzQ2OGViIiwidXNlcl9pZCI6IjQ4ZWYyMGU3LWQwNWItNGYxMS1iZmUxLTFhMTU1MjFkNDA3OSJ9.YuKKCfsgyawrvLknzaJDuxTbQ0VzuIw9OhZQoK0eUIQ'
            return config
        },
        error=>{
            return Promise.reject(error);
        }
    )

    
    const download=(url)=>{
       axios.get(url,{responseType: 'blob'}
       ).then(res=>{
           fileDownload(res.data)
       })
   }
  
   const [urll,seturll]=useState('')
   const geturl=()=>{
       axios.get('http://127.0.0.1:8001/articles/')
   }

    
    
    
    const Myarticles =({messages})=>{
        const messagesEndRef = useRef(null);
        
        return(
            <div className="originalConf_1" ref={messagesEndRef}  >
          {messages.map((cle) => {
            return (
              <>
        <div className="confDiv_1" key={cle} >
              <div className="test_1">
                  <div className="title_1">{cle.title}</div>

                <div className="host_1">
                   Hosted by {cle.host}, Location - {cle.startDate} to {cle.endate}
                   </div>

              </div>
              <input className="uploadartcl" 
              onClick={()=>{this.download('http://127.0.0.1:8001/articles/1')}}
              type="file"
              />
      </div>
            
              </>
            );
          })}
          
          
        </div>

        )
    }
    

    const Getartcl=(data)=>{
        const ref=useRef(null);
        

        return(
            <>
            <div className="confDiv_1" ref={ref} >
                  <div className="test_1">
                      <div className="title_1">{data.title}</div>
    
                    <div className="host_1">
                       {data.description}  - {data.date_of_creation} 
                       </div>
    
                  </div>
                    
    
                    <button className="uploadartcl" />
          </div>
                
                  </>

        )
    }


  
// for upload image
    let host="http://127.0.0.1:8001"
    const [pic,setpic]=useState('')
    const [isloading,setisloading]=useState(false)
    let path=""

    
    const uploadImage=(e)=>{
            const data = new FormData()
            data.append('profile_picture',e.target.files[0])
            console.log(data)
            path=e.target.path
            axios.put('http://127.0.0.1:8001/users/profile',
            data,{ headers: {
                "Content-Type": "multipart/form-data",
              },}
        )
        .then(res=>{

            setdata_profile(res.data)
            setisloading(!isloading)
            console.log('here_pic')
        })
    
    }

    ////////////////////////////////////////////////

    const [article,setarticle]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        axios.get('http://127.0.0.1:8001/articles/list/path'
        ).then(artc=>{
            console.log(artc["data"])
            setarticle(artc["data"])
        }
            ).catch(err=>{
                console.log('failed')
            })
},[])


    


    const [data_profile,setdata_profile]=useState({})


        useEffect(()=>
        {
            axios.get(
                'http://127.0.0.1:8001/users/profile'
            ).then(reponse=>
                {
                    console.log(reponse.data);
                    setdata_profile(reponse["data"]);
                    setpic(host+reponse.data["profile_picture"]);
                }).catch(err=>{
                    console.log(err);
                })
        },[isloading])
    


    const [confs, setConfs] = useState(data_1);




    
    return(
        <div className="account_page" id="account">

<div class="header">
  <h2>Account</h2>
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

            <div className="container_acc">
                <div className="container_acc_l">






{/*  ////////////////////////////// */}

                    <div className="container_acc_l_logo">
                        <div className="form-controll">
                            <input 
                            type="file"
                            onChange={uploadImage}
                            name='file_up'
                            />
                        </div>
                        {!isloading&&<img src={pic} alt={pic}/>}
                        
                    </div>

                    




{/* //////////////////////////////////////////////////// */}

                    <div className="container_acc_l_info">

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
                    </div>
                </div>



                <div className="container_acc_r" >
                    <Nav/>
                <Myarticles messages={article}/>
                    
       
                </div>
            </div>

        </div>
    )
}

export default Account