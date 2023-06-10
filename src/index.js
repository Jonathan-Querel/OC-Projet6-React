import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home.js";
import APropos from "./pages/APropos/APropos";
import Error from "./pages/Error/Error";
import Footer from "./components/Footer/Footer";
import FicheLogement from "./pages/FicheLogement/FicheLogement.js";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header img="../assets/logo_header_kasa.png" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer
        titre_footer="© 2020 Kasa. All rights reserved"
        img_footer="../assets/logo_footer_kasa.png"
      />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
