import "./CardContainerLayout.css";

export default function CardContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="products-container">
      <div className="products">{children}</div>
    </div>
  );
}
