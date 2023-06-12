import { useParams } from "react-router-dom";

import Logements from "../../Logements.js";
import Carrousel from "../../components/Carrousel/Carrousel.js";
import Tag from "../../components/Tag/Tag.js";
import Collapse from "../../components/Collapse/Collapse.js";
import "./FicheLogement.css";

function Fiche_logement() {
  const { id } = useParams();
  const Logement = Logements.find((logement) => logement.id === id);

  return (
    <>
      <div className="fiche-logement">
        <div className="kasa-logement-group-description">
          <div className="kasa-logement-group-titre">
            <h2 className="kasa-carrousel-titre">{Logement.title}</h2>
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
            <Collapse
              type_collapse="Text"
              titre_collapse="Description"
              description_collapse={Logement.description}
            />
          </div>

          <div className="kasa-collapse-logement-equipement">
            {Logement.equipments.map((data, index) => (
              <Collapse
                type_collapse="List"
                titre_collapse="Equipements"
                key={index}
                description_collapse={data}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Fiche_logement;

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
