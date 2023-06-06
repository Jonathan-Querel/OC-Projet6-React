import "./card.css";

function Card(props) {
  const { titre_card, img_card } = props;
  return (
    <div className="kasa-group-card">
      <div className="kasa-card">
        <img className="kasa-card-img" src={img_card} alt="Logement" />
        <p className="kasa-card-title">{titre_card}</p>
      </div>
      <div className="kasa-card">
        <img className="kasa-card-img" src={img_card} alt="Logement" />
        <p className="kasa-card-title">{titre_card}</p>
      </div>
      <div className="kasa-card">
        <img className="kasa-card-img" src={img_card} alt="Logement" />
        <p className="kasa-card-title">{titre_card}</p>
      </div>
      <div className="kasa-card">
        <img className="kasa-card-img" src={img_card} alt="Logement" />
        <p className="kasa-card-title">{titre_card}</p>
      </div>
      <div className="kasa-card">
        <img className="kasa-card-img" src={img_card} alt="Logement" />
        <p className="kasa-card-title">{titre_card}</p>
      </div>
      <div className="kasa-card">
        <img className="kasa-card-img" src={img_card} alt="Logement" />
        <p className="kasa-card-title">{titre_card}</p>
      </div>
      <div className="kasa-card">
        <img className="kasa-card-img" src={img_card} alt="Logement" />
        <p className="kasa-card-title">{titre_card}</p>
      </div>
    </div>
  );
}

export default Card;
