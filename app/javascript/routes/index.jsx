import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/users/Index";
import SignUp from "../components/users/SignUp";

export default (
  <Router>
    <Routes>
      <Route path="/users/sign_up" element={<SignUp />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  </Router>
);
