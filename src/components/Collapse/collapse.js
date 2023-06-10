import "./Collapse.css";
import { useState } from "react";

function Collapse(props) {
  const { titre_collapse, type_collapse, description_collapse } = props;
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
    console.log(isOpen);
  };

  if (type_collapse === "Text") {
    return (
      <>
        <div className="kasa-collapse">
          <details className="kasa-collapse-details" onClick={handleClick}>
            <summary className="kasa-collapse-title">
              {titre_collapse}
              <div className="kasa-collapse-chevron">
                {isOpen ? (
                  <i className="fa-solid fa-chevron-down"></i>
                ) : (
                  <i className="fa-solid fa-chevron-up"></i>
                )}
              </div>
            </summary>
            <div className="kasa-collapse">
              <div className="kasa-collapse-texte">{description_collapse}</div>
            </div>
          </details>
        </div>
      </>
    );
  }

  if (type_collapse === "Equipements") {
    return (
      <div className="kasa-collapse">
        <h3 className="kasa-collapse-title">{titre_collapse}</h3>
        <div className="kasa-collapse-chevron">
          {isOpen ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
        </div>
      </div>
    );
  }

  return true;
}

export default Collapse;
