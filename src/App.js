import React from "react"
import Home from "./components/accueil/Home"
import Account from "./components/account/Account"
import My from "./components/my articales/My"
import MainConf from "./components/conference/MainConf"
import CreateConf from "./components/conference/CreateConf"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"



function App () {
  return (
     <Router>
       
       <Routes>
         <Route exact path="/"  element={<Home/>}/>
         <Route path="/My" element={<My/>}/>
         <Route path="/CreateConf" element={<CreateConf/>}/>
         <Route path="/MainConf" element={<MainConf/>}/>
         <Route path="/account" element={<Account/>}/>
       </Routes>
      
      </Router>
  );
}

export default App;
