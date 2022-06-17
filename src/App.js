<<<<<<< HEAD
import React from "react";
import Home from "./components/accueil/Home";
import Account from "./components/account/Account";
import My from "./components/my articales/My";
import MainConf from "./components/conference/MainConf";
import CreateConf from "./components/conference/CreateConf";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Conf from "./components/conference/Conf";
import Edit_art from "./components/edit_Article/Edit_art";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/My" element={<My />} />
        <Route path="/Conf/:id" element={<Conf />} />
        <Route path="/CreateConf" element={<CreateConf />} />
        <Route path="/MainConf" element={<MainConf />} />
        <Route path="/account" element={<Account />} />
        <Route path="/Edit_art/:id" element={<Edit_art />} />
      </Routes>
    </Router>
=======
import React from "react"
import Home from "./components/accueil/Home"
import Account from "./components/account/Account"
import My from "./components/my articales/My"
import MainConf from "./components/conference/MainConf"
import CreateConf from "./components/conference/CreateConf"
import { BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Conf from "./components/conference/Conf"
import Edit_art from "./components/edit_Article/Edit_art"

function App() {
  return (
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
>>>>>>> 0facdfce9925e736ce52196bc7375ef186df48af
  );
}

export default App;
