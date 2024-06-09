import {
  generalTitleMetaData,
  generalDescriptionMetaData,
  generalKeywordsMetaData,
} from "@/data/SEOData";
import StoreProvider from "@/components/redux/StoreProvider";

import { builder } from "@builder.io/sdk";
import { Metadata } from "next";
import ProductIntro from "./ClientContent";
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
  return (
    <StoreProvider>
      <ProductIntro params={params} />
    </StoreProvider>
  );
}
