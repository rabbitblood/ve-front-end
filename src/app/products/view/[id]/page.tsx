import StoreProvider from "@/components/redux/StoreProvider";
import Product from "./Product";

interface Prop {
  params: {
    id: string;
  };
}

export default function ProductWrapper({ params }: Prop) {
  return (
    <StoreProvider>
      <Product params={params} />
    </StoreProvider>
  );
}
