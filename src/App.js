import React from "react"
import Home from "./components/accueil/Home"
import Account from "./components/account/Account"
import My from "./components/my articales/My"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"



function App () {
  return (
     <Router>
       
       <Routes>
         <Route path="/account" element={<Account/>}/>
         <Route path="/My" element={<My/>}/>
         <Route exact path="/"  element={<Home/>}/>
       </Routes>
      
      </Router>
  );
}

export default App;
