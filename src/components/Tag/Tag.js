import "./Tag.css";

function Tag(props) {
  const { titre_tag } = props;

  return (
    <div className="kasa-tag">
      <p className="kasa-tag-title">{titre_tag}</p>
    </div>
  );
}

export default Tag;
