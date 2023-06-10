import Logements from "../../Logements";
import "./Carrousel.css";

function Carrousel(props) {
  const { img_carrousel } = props;
  return (
    <div className="Carrousel">
      {Logements.map((Logements) => (
        <div key={Logements.id}>
          {Logements.pictures.map((picture) => (
            <div key={picture.id}>
              <img
                className="kasa-carrousel-img"
                src={img_carrousel}
                alt="logement"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Carrousel;
