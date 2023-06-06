import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home/home.js";
import Apropos from "./pages/Apropos/apropos";
import Error from "./pages/Error/error";
import Footer from "./components/Footer/footer";
import "./styles/index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header img="assets/logo_header_kasa.png" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<Apropos />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer
        titre_footer="© 2020 Kasa. All rights reserved"
        img_footer="assets/logo_footer_kasa.png"
      />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
