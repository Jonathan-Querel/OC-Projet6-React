import "./Footer.css";

function Footer(props) {
  const { titre_footer, img_footer } = props;
  return (
    <div className="kasa-footer">
      <img className="kasa-footer-logo" src={img_footer} alt="Logo" />
      <h3 className="kasa-footer-title">{titre_footer}</h3>
    </div>
  );
}

export default Footer;
