import "./CollapseLogement.css";

function Collapse_logement(props) {
  const {
    titre_collapse_logement,
    type_collapse_logement,
    description_collapse_logement,
  } = props;

  if (type_collapse_logement === "Description") {
    return (
      <>
        <div className="kasa-collapse-logement">
          <details className="kasa-collapse-logement-details">
            <summary className="kasa-collapse-logement-title">
              {titre_collapse_logement}
              <div className="kasa-collapse-chevron">
                <i className="fa-solid fa-chevron-up"></i>
              </div>
            </summary>
            <div className="kasa-collapse-logement-texte">
              {description_collapse_logement}
            </div>
          </details>
        </div>
      </>
    );
  }

  if (type_collapse_logement === "Equipements") {
    return (
      <>
        <div className="kasa-collapse-logement">
          <details className="kasa-collapse-logement-details">
            <summary className="kasa-collapse-logement-title">
              {titre_collapse_logement}
              <div className="kasa-collapse-chevron">
                <i className="fa-solid fa-chevron-up"></i>
              </div>
            </summary>
            <div className="kasa-collapse-logement-texte">
              {description_collapse_logement}
            </div>
          </details>
        </div>
      </>
    );
  }

  return true;
}

export default Collapse_logement;
