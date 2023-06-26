import "./Footer.css";

function Footer(props) {
  const { texte_footer, logo_footer } = props;
  return (
    <div className="kasa-footer">
      <img className="kasa-footer-logo" src={logo_footer} alt="Logo" />
      <h3 className="kasa-footer-texte">{texte_footer}</h3>
    </div>
  );
}

export default Footer;
