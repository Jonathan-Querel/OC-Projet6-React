import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  const { logo } = props;
  return (
    <div className="kasa-header">
      <img src={logo} alt="Logo Kasa" />
      <nav className="kasa-header-lien-navigation">
        <Link to="/">Accueil</Link>
        <Link to="/Apropos">A propos</Link>
      </nav>
    </div>
  );
}

export default Header;
