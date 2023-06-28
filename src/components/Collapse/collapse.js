import "./collapse.css";

function Collapse(props) {
  const { type_collapse, titre_collapse, description_collapse } = props;

  if (type_collapse === "Text") {
    return (
      <div className="kasa-collapse-text">
        <details className="kasa-collapse-details">
          <summary>
            <div className="kasa-collapse-title">{titre_collapse}</div>
            <i className="fa-solid fa-chevron-up"></i>
          </summary>
          <div className="kasa-collapse-deroule">
            <p className="kasa-collapse-description">{description_collapse}</p>
          </div>
        </details>
      </div>
    );
  }

  if (type_collapse === "List") {
    return (
      <div className="kasa-collapse-list">
        <details className="kasa-collapse-details">
          <summary>
            <div className="kasa-collapse-title">{titre_collapse}</div>
            <i className="fa-solid fa-chevron-up"></i>
          </summary>
          <div className="kasa-collapse-deroule">
            <ul className="kasa-collapse-description">
              {description_collapse.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </details>
      </div>
    );
  }
}

export default Collapse;
