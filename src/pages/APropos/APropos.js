import Banner from "../../components/BannerAPropos/BannerAPropos.js";
import Collapse from "../../components/Collapse/collapse.js";
import "./Apropos.css";

function Apropos() {
  return (
    <>
      <Banner img_banner_a_propos="assets/photo_banner_a_propos.png" />

      <div className="kasa-collapse-apropos">
        <Collapse
          type_collapse="Text"
          description_collapse="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          titre_collapse="Fiabilité"
        />
        <Collapse
          type_collapse="Text"
          description_collapse="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportemenet discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          titre_collapse="Respect"
        />
        <Collapse
          type_collapse="Text"
          description_collapse="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          titre_collapse="Service"
        />
        <Collapse
          type_collapse="Text"
          description_collapse="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          titre_collapse="Sécurité"
        />
      </div>
    </>
  );
}

export default Apropos;
