import "./card.css";

function Card(props) {
  const { titre_card, img_card } = props;
  return (
    <div className="kasa-card">
      <img className="kasa-card-img" src={img_card} alt="Carte logement" />
      <h2 className="kasa-card-title">{titre_card}</h2>
    </div>
  );
}

export default Card;
