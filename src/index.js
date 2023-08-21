import React from "react"; /* importe la librairie REACT*/
import ReactDOM from "react-dom/client"; /* importe la librairie ReactDOM*/
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"; /* Importe le RouterReact pour faire les liens / redirection*/
import Header from "./components/Header/header";
import Home from "./pages/Home/Home.js";
import APropos from "./pages/APropos/APropos.js";
import Error from "./pages/Error/Error";
import Footer from "./components/Footer/footer";
import FicheLogement from "./pages/FicheLogement/FicheLogement.js";

const root = ReactDOM.createRoot(
  document.getElementById("root")
); /* Injecte tout le code JS dans la balise ayant l'id "root"*/

root.render(
  /* Fonction de base de react qui permet de construire les éléments React sur la page*/
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
