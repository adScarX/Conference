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
import {data} from "./../conference/data"
import "./../conference/MainConf.css"
import image_1 from "./ profile.png"

function Account () {
    let navigate = useNavigate();
    let navigate_2=useNavigate();
    
    axios.interceptors.request.use(
        config=>{
            config.headers.authorization = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUyMzg5ODQ1LCJpYXQiOjE2NTIzNTM4NDUsImp0aSI6IjUzNzRmOGI5YTQ4MTRmYzM4Y2M2Y2E0YzY2MmI3Y2ZjIiwidXNlcl9pZCI6IjQ4ZWYyMGU3LWQwNWItNGYxMS1iZmUxLTFhMTU1MjFkNDA3OSJ9.b3Bdrrkb2YrFKJaG2uJLZGORuyiomYu0tYrZvADylkA'
            return config
        },
        error=>{
            return Promise.reject(error);
        }
    )

    const [file,setfile]=useState();
    const [previewurl,setpreviewurl]=useState();
    const filepickerref=useRef();

    function pickerhandler(event){
        let pickedfile;
        if(event.target.files && event.target.files.length===1){
            pickedfile=event.target.files[0];
            setfile(pickedfile);
        }
    }

    function pickedimagehandler(){
        filepickerref.current.click();
    }

    useEffect(()=>{
        if(file){
            return;
        }
        const filereder=new filereder();
        filereder.onlead=()=>{
        setpreviewurl(filereder.result);
    };
    filereder.readAsDataUrl()
    }
    )


    

















// for upload image
    
// const [image,setimage]=useState('')
// const [loading,setloading]=useState(false)
//     const uploadImage=({target:{files}})=>{
         

        
//             console.log(files)
//             console
//             .log('here')
//             setimage(files[0])
        
        
        
//             console
//             .log('here2')
//             const data_2 = new FormData()
//             data_2.append('profile_picture',image)
//             axios.put('http://127.0.0.1:8000/users/profile',
//             data_2
//         )
//         .then(res=>{
//             console.log(res)
//         })
        
    


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


    const [confs, setConfs] = useState(data);
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

                    {/* <div className="container_acc_l_logo">
                        <div className="form-controll">
                            <input ref={filepickerref}
                            style={{display:"none"}}
                            type="file"
                            accept=".png"
                            onChange={pickerhandler}
                            />
                            <div className="image_upload_preview">
                                {previewurl && <img src={previewurl} alt="previwer"/>}
                                {!previewurl &&(
                                    <div className="center">
                                        <button className="image-upload-image"  type="button" onClick={pickedimagehandler}>+</button></div>
                                ) }
                            </div>

                            {previewurl &&(
                                 <div className="center">
                                 <button className="image-upload-image"  type="button" onClick={pickedimagehandler}>
                                     <MdModeEdit className="icon"></MdModeEdit>
                                     </button>
                                      </div>
                            )}





                        </div>

                    </div> */}



{/* //////////////////////////////////////////////////// */}

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