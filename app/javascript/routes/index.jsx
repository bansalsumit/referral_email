import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../components/users/Index";

export default (
  <Router>
    <Routes>
      <Route path="/users/sign_up" element={<SignUp />} />
    </Routes>
  </Router>
);
