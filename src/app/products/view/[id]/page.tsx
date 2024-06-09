import Product from "./Product";

interface Prop {
  params: {
    id: string;
  };
}

export default function ProductWrapper({ params }: Prop) {
  return <Product params={params} />;
}
