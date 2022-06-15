<<<<<<< HEAD
import React from "react"
import Home from "./components/accueil/Home"
import Account from "./components/account/Account"
import My from "./components/my articales/My"
import MainConf from "./components/conference/MainConf"
import CreateConf from "./components/conference/CreateConf"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Conf from "./components/conference/Conf"
import Edit_art from "./components/edit_Article/Edit_art"
=======
import React from "react";
import Home from "./components/accueil/Home";
import Account from "./components/account/Account";
import My from "./components/my articales/My";
import MainConf from "./components/conference/MainConf";
import CreateConf from "./components/conference/CreateConf";
import ApplyForm from "./components/conference/ApplyForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Conf from "./components/conference/Conf";
>>>>>>> d9b1ebc062584dafbf72bdf3e4065bf3104b50e7

function App() {
  return (
<<<<<<< HEAD
     <Router>
       
       <Routes>
         <Route exact path="/"  element={<Home/>}/>
         <Route path="/My" element={<My/>}/>
         <Route path="/Conf/:id" element={<Conf/>}/>
         <Route path="/CreateConf" element={<CreateConf/>}/>
         <Route path="/MainConf" element={<MainConf/>}/>
         <Route path="/account" element={<Account/>}/>
         <Route path="/Edit_art/:id" element={<Edit_art/>}/>
       </Routes>
      
      </Router>
=======
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/My" element={<My />} />
        <Route path="/Conf/:id" element={<Conf />} />
        <Route path="/CreateConf" element={<CreateConf />} />
        <Route path="/Conf/:id/ApplyForm" element={<ApplyForm />} />
        <Route path="/MainConf" element={<MainConf />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
>>>>>>> d9b1ebc062584dafbf72bdf3e4065bf3104b50e7
  );
}

export default App;
