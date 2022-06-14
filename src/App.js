import React from "react";
import Home from "./components/accueil/Home";
import Account from "./components/account/Account";
import My from "./components/my articales/My";
import MainConf from "./components/conference/MainConf";
import CreateConf from "./components/conference/CreateConf";
import ApplyForm from "./components/conference/ApplyForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Conf from "./components/conference/Conf";

function App() {
  return (
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
  );
}

export default App;
