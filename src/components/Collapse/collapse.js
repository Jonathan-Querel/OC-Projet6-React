import "./collapse.css";

function Collapse(props) {
  const { titre_collapse } = props;
  return (
    <div className="kasa-collapse">
      <h3 className="kasa-collapse-title">{titre_collapse}</h3>
      <div className="kasa-collapse-chevron">
        <i className="fa-solid fa-chevron-up"></i>
      </div>
    </div>
  );
}

export default Collapse;
