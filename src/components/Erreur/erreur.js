import "./Erreur.css";

function Erreur() {
  return (
    <div className="kasa-erreur">
      <h1 className="kasa-erreur-404">404</h1>
      <p className="kasa-erreur-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <a href="http://localhost:3000/" className="kasa-erreur-lien">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
}

export default Erreur;
