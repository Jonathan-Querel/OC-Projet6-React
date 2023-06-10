import "./BannerAPropos.css";

function Banner_a_propos(props) {
  const { img_banner_a_propos } = props;
  return (
    <div className="kasa-banner-a-propos">
      <img
        className="kasa-banner-img-a-propos"
        src={img_banner_a_propos}
        alt="Bannière"
      />
    </div>
  );
}

export default Banner_a_propos;
