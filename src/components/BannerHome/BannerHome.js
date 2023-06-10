import "./BannerHome.css";

function Banner(props) {
  const { titre_banner_home, img_banner_home } = props;
  return (
    <div className="kasa-banner">
      <h1 className="kasa-banner-title">{titre_banner_home}</h1>
      <img className="kasa-banner-img" src={img_banner_home} alt="Bannière" />
    </div>
  );
}

export default Banner;
