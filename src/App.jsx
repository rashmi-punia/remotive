import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./page_components/HomePage";
import LandingPage from "./landing_components/LandingPage";
import LogIn from "./logIn/LogIn";
import Reset from "./logIn/Reset";
import Form_page from "./PostJob/Form_page";

import { AnimatePresence } from "framer-motion";
import Project from "./Project/Project";
import Index from "./Donation";
import SignUp from "./logIn/SignUp/SignUp";
import NewAcc from "./logIn/SignUp/NewAcc";

const App = () => {
  // const location = useLocation
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route exact path="/Home" element={<HomePage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/logIn" element={<LogIn />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/form" element={<Form_page />} />
          <Route path="/project" element={<Project />}></Route>
          <Route path="/donate" element={<Index />}></Route>
          <Route path="/signUp" element={<NewAcc />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
