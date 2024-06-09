"use client";
import { FormButton } from "@/components/atoms/FormButton/FormButton";
import { getDataByName } from "@/lib/builderio/builderDataUtil";
import { useEffect, useState } from "react";
import Link from "next/link";

//jquery
import $ from "jquery";
import Banner from "@/components/organisms/Banner/Banner";
import { useIsMobile } from "@/hooks/pageUtil";

import { builder } from "@builder.io/sdk";
builder.init(process.env.NEXT_PUBLIC_BUILDER_PUBLIC_KEY ?? "");

export default function HomePageBanner() {
  const isMobile = useIsMobile();
  const [slideData, setSlideData] = useState();

  useEffect(() => {
    getDataByName("home-page-banner").then((data) => {
      //console.log(data);

      setSlideData(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.bannerSlides.map((item: any, idx: number) => {
          return {
            original: item.slideImage,
            thumbnail: item.slideImage,
            displayElement: (
              <div className="banner-text-container">
                <p className="sub-title">{item.subTitle}</p>
                <h2 className="title">{item.title}</h2>
                <Link href={item.buttonUrl}>
                  <FormButton>{item.buttonText}</FormButton>{" "}
                </Link>
              </div>
            ),
            renderItem:
              item.assetType === "mp4" &&
              (() => {
                const element = (
                  <video
                    className={`video${idx}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    controls={false}
                    autoPlay
                    muted
                    loop
                    playsInline
                    webkit-playsinline="true"
                    x-webkit-airplay="true"
                    x5-video-player-type="h5"
                    x5-video-player-fullscreen="true"
                    x5-video-orientation="portrait"
                    poster={item.videoPoster}
                  >
                    <source src={item.slideImage} type="video/mp4" />
                  </video>
                );
                setTimeout(() => {
                  function doPlay() {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    (window as any).WeixinJSBridge.invoke(
                      "getNetworkType",
                      {},
                      function () {
                        const $video: JQuery<HTMLVideoElement> = $(
                          `.video${idx}`
                        );
                        if ($video[0]) {
                          $video[0].play();
                        }
                        console.log("invoke getNetworkType");

                        setTimeout(() => {
                          if ($video[0]) {
                            const isVideoPlaying =
                              $video[0].currentTime > 0 &&
                              !$video[0].paused &&
                              !$video[0].ended &&
                              $video[0].readyState > 2;
                            console.log(isVideoPlaying);
                            if (!isVideoPlaying) {
                              if ($video[0]) {
                                $video[0].play();
                              }
                            }
                          }
                        }, 500);
                      }
                    );
                  }

                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  if ((window as any).WeixinJSBridge) {
                    doPlay();
                  } else {
                    document.addEventListener(
                      "WeixinJSBridgeReady",
                      function () {
                        doPlay();
                      },
                      false
                    );

                    const $video: JQuery<HTMLVideoElement> = $(`.video${idx}`);
                    if ($video[0]) {
                      $video[0].play();
                    }

                    setTimeout(() => {
                      setTimeout(() => {
                        if ($video[0]) {
                          const isVideoPlaying =
                            $video[0].currentTime > 0 &&
                            !$video[0].paused &&
                            !$video[0].ended &&
                            $video[0].readyState > 2;
                          if (!isVideoPlaying) {
                            if ($video[0]) {
                              $video[0].play();
                            }
                          }
                        }
                      }, 500);
                    }, 500);
                  }
                }, 500);

                return <>{element}</>;
              }),
          };
        })
      );
    });
  }, [isMobile]);

  return <>{slideData && <Banner slideData={slideData} />}</>;
}
