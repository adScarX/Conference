import {HashLink as Link } from "react-router-hash-link";
import { useNavigate, useParams } from "react-router-dom";
import "./Conf.css"
import "./MainConf.css"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LanguageIcon from '@mui/icons-material/Language';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import {conferences} from "./data"


function Conf(){
    const {id} = useParams();
    console.log(id)
    let navigate_2=useNavigate();
    let navigate = useNavigate();

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
        <div className="origDiv">
            <div className="confInfos">
                <img src={conferences[0].photo}
                     alt={conferences[0].photo}/>
                     <div className="infoDetails">
                         <LocationOnIcon className="icon"></LocationOnIcon>
                         <p>{conferences[0].adresse}</p>
                     </div>
                     <div className="infoDetails">
                         <AlternateEmailIcon className="icon"></AlternateEmailIcon>
                         <p>{conferences[0].adresse}</p>
                     </div>
                     <div className="infoDetails">
                         <LanguageIcon className="icon"></LanguageIcon>
                         <p>{conferences[0].publisher}</p>
                     </div>
                     <div className="infoDetails">
                         <AccountBalanceIcon className="icon"></AccountBalanceIcon>
                         <p>{conferences[0].host}</p>
                     </div>
                     <div className="infoDetails">
                         <AccessTimeIcon  className="icon"></AccessTimeIcon>
                         <p>{conferences[0].startDate}</p>
                     </div>
                     <div className="infoDetails">
                         <AccessTimeFilledIcon className="icon"></AccessTimeFilledIcon>
                         <p>{conferences[0].endate}</p>
                     </div>

                     <div className="btnparam">
                         <button className="apply-to-join" ><p className="txt">Apply to join</p></button>
                     </div>


                
            </div>

            <div className="confdesc">
                <h1>{conferences[0].title}</h1>
                <p>{conferences[0].description}</p>
                
            </div>
            
        </div>
        </main>
    )

}

export default Conf;