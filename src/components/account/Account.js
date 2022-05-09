import React from "react";
import "./account.css";
import Navbar from "../navbar/Navbar";
import Nav from "../nav_account/Nav";



function Account(){

    // const [image, setimage] = useState(initial);


    // const uploadimage=()=>{
    //     console.log(files[0])
    // }
    return(
        <div className="account_page" id="account">
            <Navbar/>

            <div className="container_acc">
                <div className="container_acc_l">
                    <div className="container_acc_l_logo">
                        <div className="image_account">
                            {/* <img src={image} className="image_acc"/> */}
                            <label htmlFor="input">
                                <i class="material-icons">add_photo_alternate</i>
                            </label>
                        </div>
                        <input type="file" accept="image" id="input" 
                        // onChange={
                        //     (event)=>setimage(event.target.files)}
                        />
                    </div>
                    <div className="container_acc_l_info">
                        kk
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