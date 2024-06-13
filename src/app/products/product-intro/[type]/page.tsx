import {
  generalTitleMetaData,
  generalDescriptionMetaData,
  generalKeywordsMetaData,
} from "@/data/SEOData";
import { Metadata } from "next";
import ProductIntro from "./ClientContent";
import { builder } from "@builder.io/sdk";
builder.init(process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY ?? "");

interface Prop {
  params: {
    type: string;
  };
}

export async function generateMetadata({ params }: Prop): Promise<Metadata> {
  // read route params
  const type = params.type;
  return {
    title: `${type} | ${generalTitleMetaData}`,
    description: `${type} ${generalDescriptionMetaData}`,
    keywords: `${type}, ${generalKeywordsMetaData}`,
  };
}

export default function ProductIntroWrapper({ params }: Prop) {
  return <ProductIntro params={params} />;
}
