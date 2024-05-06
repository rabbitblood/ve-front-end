import "./TextSections.css";

interface Props {
  title?: string;
  text?: string;
  image?: string;
  textRight?: boolean;
  color?: string;
}

export default function TextWithImage(props: Props) {
  return (
    <div className={"text-with-image" + (props.textRight ? " text-right" : "")}>
      <div className="text-group" style={{ color: props.color }}>
        <h2 className="title">{props.title}</h2>
        <p className="text">{props.text}</p>
      </div>
      <img className="image" src={props.image} />
    </div>
  );
}
