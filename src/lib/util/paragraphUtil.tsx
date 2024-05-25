interface Props {
  str: string;
  elementClassName: string;
  spanClassName: string;
}

function StringToUppercasedFirstLetterParagraphElement(props: Props) {
  const firstLetter = props.str.charAt(0).toUpperCase();
  const rest = props.str.slice(1);

  return (
    <p className={props.elementClassName}>
      <span className={props.spanClassName}>{firstLetter}</span>
      {rest}
    </p>
  );
}

export { StringToUppercasedFirstLetterParagraphElement };
