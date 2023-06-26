import "./BannerAPropos.css";

function Banner_a_propos(props) {
  const { img_banner_a_propos } = props;
  return (
    <div className="kasa-banner-apropos">
      <img
        className="kasa-banner-img-apropos"
        src={img_banner_a_propos}
        alt="Bannière à propos"
      />
    </div>
  );
}

export default Banner_a_propos;
