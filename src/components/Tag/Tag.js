import "./Tag.css";

function Tag(props) {
  const { titre_tag } = props;

  return (
    <div className="kasa-tag">
      <div className="kasa-tag-title">{titre_tag}</div>
    </div>
  );
}

export default Tag;
