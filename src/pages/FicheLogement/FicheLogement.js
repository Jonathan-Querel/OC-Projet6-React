import { useParams } from "react-router-dom";

import Tag from "../../components/Tag/Tag.js";

import Logements from "../../Logements.js";
import "./FicheLogement.css";
import CollapseLogement from "../../components/CollapseLogement/CollapseLogement.js";

// const textes = [
//   {
//     titre: "Fiabilité",
//     description: "Description",
//     type: "Texte"
//   },
//   {
//     titre: "Fiabilité",
//     description: "Description",
//   },
//   {
//     titre: "Fiabilité",
//     description: "Description",
//   },
// ];

function Fiche_logement() {
  const { id } = useParams();
  const Logement = Logements.find((logement) => logement.id === id);

  return (
    <>
      <div className="fiche-logement">
        <div className="kasa-logement-group-description">
          <div className="kasa-logement-group-titre">
            <p className="kasa-carrousel-titre">{Logement.title}</p>
            <p className="kasa-carrousel-sous-titre">{Logement.location}</p>
          </div>
          <div className="kasa-logement-group-profil">
            <p className="kasa-logement-nom-profil">{Logement.host.name}</p>
            <img
              className="kasa-logement-photo-profil"
              src={Logement.host.picture}
              alt="Profil"
            ></img>
          </div>
        </div>
        <div className="kasa-group-tag-star">
          <div className="kasa-group-tag">
            {Logement.tags.map((data, index) => (
              <Tag key={index} titre_tag={data}></Tag>
            ))}
            {/* <Tag type_tag="Cozy" titre_tag="Cozy" />
            <Tag type_tag="Canal" titre_tag="Canal" />
            <Tag type_tag="Paris 10" titre_tag="Paris 10" /> */}
          </div>
          <div className="kasa-tag-star">
            {Logement.rating < 1 ? (
              <img src="../assets/star_grey.png" alt="étoile grise"></img>
            ) : (
              <img src="../assets/star_red.png" alt="étoile rouge"></img>
            )}
            {Logement.rating < 2 ? (
              <img src="../assets/star_grey.png" alt="étoile grise"></img>
            ) : (
              <img src="../assets/star_red.png" alt="étoile rouge"></img>
            )}
            {Logement.rating < 3 ? (
              <img src="../assets/star_grey.png" alt="étoile grise"></img>
            ) : (
              <img src="../assets/star_red.png" alt="étoile rouge"></img>
            )}
            {Logement.rating < 4 ? (
              <img src="../assets/star_grey.png" alt="étoile grise"></img>
            ) : (
              <img src="../assets/star_red.png" alt="étoile rouge"></img>
            )}
            {Logement.rating < 5 ? (
              <img src="../assets/star_grey.png" alt="étoile grise"></img>
            ) : (
              <img src="../assets/star_red.png" alt="étoile rouge"></img>
            )}
          </div>
        </div>
        <div className="kasa-group-collapse-logement">
          <div className="kasa-collapse-logement-description">
            <CollapseLogement
              type_collapse_logement="Description"
              titre_collapse_logement="Description"
              description_collapse_logement="Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au coeur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'est (7 minutes à pied)."
            />
          </div>
          <div className="kasa-collapse-logement-equipement">
            <CollapseLogement
              type_collapse_logement="Equipements"
              titre_collapse_logement="Équipements"
              description_collapse_logement="Climatisation Wifi Cuisine Espace de travail Fer à repasser Sèche-cheveux Cintres"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Fiche_logement;

/*<div className="fiche-logement-carrousel">
          <div className="kasa-carrousel-chevron">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          {Logements.map((data, index) => (
            <Carrousel key={index} img_carrousel={data.pictures} />
          ))}
          <div className="kasa-carrousel-chevron">
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>*/
