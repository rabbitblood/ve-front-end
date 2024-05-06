import "./TextSections.css";

interface Props {
  title?: string;
  text?: string;
  image?: string;
  color?: string;
}

export default function WholeBlock(props: Props) {
  return (
    <div className="whole-block">
      {props.image ? (
        <img className="image" src={props.image} />
      ) : (
        <div style={{ color: props.color }}>
          <h2 className="title">{props.title}</h2>
          <p className="text">{props.text}</p>
        </div>
      )}
    </div>
  );
}
