import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home/Home.js";
import APropos from "./pages/APropos/APropos.js";
import Error from "./pages/Error/Error";
import Footer from "./components/Footer/footer";
import FicheLogement from "./pages/FicheLogement/FicheLogement.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header logo="../assets/logo_header_kasa.png" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/APropos" element={<APropos />} />
        <Route path="/FicheLogement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer
        logo_footer="../assets/logo_footer_kasa.png"
        texte_footer="© 2020 Kasa. All rights reserved"
      />
    </Router>
  </React.StrictMode>
);
