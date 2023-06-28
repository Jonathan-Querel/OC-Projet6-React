import Banner from "../../components/BannerHome/BannerHome.js";
import Card from "../../components/Card/card.js";
import Logements from "../../Logements.js";

function Home() {
  return (
    <>
      <Banner
        titre_banner_home="Chez vous, partout et ailleurs"
        img_banner_home="assets/photo_banner_home.png"
      />

      <div className="kasa-group-all-cards">
        {Logements.map((data, index) => (
          <div className="kasa-group-card" key={index}>
            <a href={"FicheLogement/" + data.id}>
              <Card titre_card={data.title} img_card={data.cover} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
