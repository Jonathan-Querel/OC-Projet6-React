import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const { img } = props;
  return (
    <div className="kasa-header">
      <img className="kasa-header-logo" src={img} alt="Logo" />
      <nav className="kasa-header-lien">
        <Link to="/">Accueil</Link>
        <Link to="/Apropos">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;
