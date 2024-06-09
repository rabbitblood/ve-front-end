import ProductType from "./ClientContent";
import { Metadata } from "next";
import {
  generalTitleMetaData,
  generalDescriptionMetaData,
  generalKeywordsMetaData,
} from "@/data/SEOData";

import { builder } from "@builder.io/sdk";
builder.init(process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY ?? "");

interface Prop {
  params: {
    type: string;
    series: string;
  };
}

export async function generateMetadata({ params }: Prop): Promise<Metadata> {
  // read route params
  const type = params.type;
  const series = params.series;
  return {
    title: `${type} | ${series} | ${generalTitleMetaData}`,
    description: `${type} ${series} ${generalDescriptionMetaData}`,
    keywords: `${type}, ${series}, ${generalKeywordsMetaData}`,
  };
}

export default function ProductTypeWrapper({ params }: Prop) {
  return <ProductType params={params} />;
}
