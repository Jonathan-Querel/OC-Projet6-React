import "./Card.css";

function Card(props) {
  const { titre_card, img_card } = props;
  return (
    <div className="kasa-card">
      <img className="kasa-card-img" src={img_card} alt="Logement" />
      <p className="kasa-card-title">{titre_card}</p>
    </div>
  );
}

export default Card;
