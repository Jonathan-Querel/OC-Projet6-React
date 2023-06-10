import "./Footer.css";

function Footer(props) {
  const { titre_footer, img_footer } = props;
  return (
    <div className="kasa-footer">
      <img className="kasa-footer-logo" src={img_footer} alt="Logo" />
      <div className="kasa-footer-title">{titre_footer}</div>
    </div>
  );
}

export default Footer;
