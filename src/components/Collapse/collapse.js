import "./Collapse.css";
import { useState } from "react";

function Collapse(props) {
  const { titre_collapse, type_collapse, description_collapse } = props;
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!isOpen);
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
              <p className="kasa-collapse-texte">{description_collapse}</p>
            </div>
          </details>
        </div>
      </>
    );
  }

  if (type_collapse === "List") {
    return (
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
            <ul className="kasa-collapse-texte">
              <li>{description_collapse}</li>
            </ul>
          </div>
        </details>
      </div>
    );
  }

  return true;
}

export default Collapse;
