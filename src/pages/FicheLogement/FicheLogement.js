import { useParams, Navigate } from "react-router-dom";
import Logements from "../../Logements.js";
import Carrousel from "../../components/Carrousel/Carrousel.js";
import Tag from "../../components/Tag/Tag.js";
import Collapse from "../../components/Collapse/collapse.js";
import "./FicheLogement.css";

function Fiche_logement() {
  const { id } = useParams();
  const Logement = Logements.find((logement) => logement.id === id);

  if (!Logement) {
    return <Navigate to="/Error" />;
  }

  const stars = [];
  const red_stars = parseInt(Logement.rating, 10);
  const grey_stars = 5 - red_stars;

  for (let i = 0; i < red_stars; i++) {
    stars.push(
      <img
        key={`red-${i}`}
        src="../assets/star_red.png"
        alt="étoile rouge"
      ></img>
    );
  }

  for (let i = 0; i < grey_stars; i++) {
    stars.push(
      <img
        key={`grey-${i}`}
        src="../assets/star_grey.png"
        alt="étoile grise"
      ></img>
    );
  }

  return (
    <>
      <div className="fiche-logement">
        <div className="fiche-logement-carrousel">
          <Carrousel img_carrousel={Logement.pictures} />
        </div>

        <div className="kasa-logement-group-description">
          <div className="kasa-logement-group-titre">
            <h2 className="kasa-logement-titre">{Logement.title}</h2>
            <p className="kasa-logement-sous-titre">{Logement.location}</p>
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
          <div className="kasa-star">{stars}</div>
        </div>

        <div className="kasa-logement-group-collapse">
          <div className="kasa-collapse-logement-description">
            <Collapse
              type_collapse="Text"
              titre_collapse="Description"
              description_collapse={Logement.description}
            />
          </div>

          <div className="kasa-collapse-logement-equipement">
            <Collapse
              type_collapse="List"
              titre_collapse="Équipements"
              description_collapse={Logement.equipments}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Fiche_logement;
