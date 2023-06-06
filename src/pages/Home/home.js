import Banner from "../../components/Banner_home/banner_home.js";
import Card from "../../components/Card/card.js";

function Home() {
  return (
    <>
      <Banner
        titre_banner_home="Chez vous, partout et ailleurs"
        img_banner_home="assets/photo_banner_home.png"
      />
      <Card titre_card="Titre de la location" img_card="" />
    </>
  );
}

export default Home;
