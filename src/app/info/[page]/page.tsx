import React from "react";
import { builder } from "@builder.io/sdk";
// See the full code: https://www.builder.io/c/docs/integrate-section-building?codeFramework=nextApp#add-an-announcement-bar-section-to-your-app
import { RenderBuilderContent } from "@/components/builderio/RenderBuilderContent";
import BasicLayout from "@/components/page/BasicLayout/BasicLayout";

// Replace with your Public API Key
builder.init("37ce5e0c9af24b75813430f31b21364f");

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default async function Page(props) {
  const content = await builder
    .get("custom-page", {
      userAttributes: {
        urlPath: "/info/" + (props?.params?.page || ""),
      },
    })
    .toPromise();

  console.log("/info/" + (props?.params?.page || ""));

  return (
    <>
      {/* Render the Builder page */}
      <BasicLayout>
        <RenderBuilderContent content={content} model={"custom-page"} />
      </BasicLayout>
    </>
  );
}
