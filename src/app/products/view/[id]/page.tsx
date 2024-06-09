import { getAllProductsAsVeProducts } from "@/lib/builderio/builderDataUtil";
import Product from "./Product";
import {
  generalDescriptionMetaData,
  generalKeywordsMetaData,
  generalTitleMetaData,
} from "@/data/SEOData";

interface Prop {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Prop) {
  const productid = params.id;
  const data = await getAllProductsAsVeProducts();

  const product: VeProduct = data.find(
    (product: VeProduct) => product.productId === productid
  );

  return {
    title: `${product.name} | ${generalTitleMetaData}`,
    description: `${product.description} ${generalDescriptionMetaData}`,
    keywords: `${product.name}, ${generalKeywordsMetaData}`,
  };
}

export default function ProductWrapper({ params }: Prop) {
  return <Product params={params} />;
}
