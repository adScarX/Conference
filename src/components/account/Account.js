import React,{useEffect,useState,useRef} 
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
import {conferences} from "./../conference/data"
=======
import {data_1} from "./data"
>>>>>>> a9d6159a94237ccc5079aac6c6b6376e39d42ee8
import "./../conference/MainConf.css"
import image_1 from "./ profile.png"

function Account () {
    let navigate = useNavigate();
    let navigate_2=useNavigate();
    
    axios.interceptors.request.use(
        config=>{
            config.headers.authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyNTczMTE0LCJpYXQiOjE2NTI1MzcxMTQsImp0aSI6IjYxYmJkNDUwNmIwZTRkNmJhYjgzZGM5NzBlZWVkNzBhIiwidXNlcl9pZCI6IjQ4ZWYyMGU3LWQwNWItNGYxMS1iZmUxLTFhMTU1MjFkNDA3OSJ9.1uPdvMKVP-1X9z_ZHHYsyJr1qSq9TruvriN6gb4Fw20'
            return config
        },
        error=>{
            return Promise.reject(error);
        }
    )

    

    // const upurl=(e)=>{
    //     console.log(e.target.files[0])}


    // let formadata =  new FormData();    

    // const [image,setimage]=useState('')    
    // const upimage=(e)=>{
    //     console.log(e.target.files[0])
    //     if(e.target && e.target.files[0]){
    //         formadata.append('profile_picture',e.target.files[0])
    //     }
    // }

    // const updata=()=>
    // {
    //     axios.put(
    //         'http://127.0.0.1:8000/users/profile',{formadata}
    //     ).then(res=>{
    //         console.log('res')
    //     }).catch(error=>{
    //         console.log('error')
    // }
    //     )}
    

















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
    const [data_profile,setdata_profile]=useState([])
    const [image,setimage]=useState([])


        useEffect(()=>
        {
            axios.get(
                'http://127.0.0.1:8000/users/profile'
            ).then(reponse=>
                {
                    console.log(reponse['data']);
                    setdata_profile(reponse['data']);
                }).catch(err=>{
                    console.log('here2');
                })
        },[])
    


<<<<<<< HEAD
//     //     axios.put('http://127.0.0.1:8000/users/profile',
//     //     data_2
//     //     )
//     //     .then(res=>
//     //         {
//     //     setimage(target),
//     //     setloading(false)
//     // })
// }

  
    


//     // const [data,setData]=useState([])
//     // useEffect(()=>{
//     //     axios.get('http://127.0.0.1:8000/users/profile').then(response=>{
//     //     console.log(response)
//     //     setData(response['data'])})
//     //     .catch((err)=>
//     //     console.log(err))
//     // },[]);


    const [confs, setConfs] = useState(conferences);
=======
    const [confs, setConfs] = useState(data_1);
>>>>>>> a9d6159a94237ccc5079aac6c6b6376e39d42ee8
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
                        
                    </div>

                    




{/* //////////////////////////////////////////////////// */}

                    <div className="container_acc_l_info">
<<<<<<< HEAD
                        {conferences.data?.map((prfl)=>
                        <div>
                            <h1>{prfl.first_name}</h1>

                        </div>
                        )}
=======
>>>>>>> a9d6159a94237ccc5079aac6c6b6376e39d42ee8
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