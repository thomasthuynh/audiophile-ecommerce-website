import { useState, useEffect } from "react";

import { ImageSource } from "../types";

// SMALL IMAGES
import PrimarySpeakerSm from "../assets/home/mobile/image-speaker-zx9.png";
import SpeakerSm from "../assets/home/mobile/image-speaker-zx7.jpg";
import EarphonesSm from "../assets/home/mobile/image-earphones-yx1.jpg";

// MEDIUM IMAGES
import PrimarySpeakerMd from "../assets/home/tablet/image-speaker-zx9.png";
import SpeakerMd from "../assets/home/tablet/image-speaker-zx7.jpg";
import EarphonesMd from "../assets/home/tablet/image-earphones-yx1.jpg";

// LARGE IMAGES
import PrimarySpeakerLg from "../assets/home/desktop/image-speaker-zx9.png";
import SpeakerLg from "../assets/home/desktop/image-speaker-zx7.jpg";
import EarphonesLg from "../assets/home/desktop/image-earphones-yx1.jpg";

type Props = {};

type ProductKey = keyof ImageSource;

const FeaturedProducts = (props: Props) => {
  const [viewWidth, setViewWidth] = useState<number>(window.innerWidth);

  const imageSource: ImageSource = {
    primarySpeaker: {
      small: PrimarySpeakerSm,
      medium: PrimarySpeakerMd,
      large: PrimarySpeakerLg,
    },
    speaker: {
      small: SpeakerSm,
      medium: SpeakerMd,
      large: SpeakerLg,
    },
    earphones: {
      small: EarphonesSm,
      medium: EarphonesMd,
      large: EarphonesLg,
    },
  };

  const getImageSize = (product: ProductKey): string | undefined => {
    if (viewWidth < 768) {
      return imageSource[product].small;
    } else if (viewWidth >= 768 && viewWidth < 1280) {
      return imageSource[product].medium;
    } else if (viewWidth >= 1280) {
      return imageSource[product].large;
    } else {
      return undefined;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="py-8">
      <div className="mx-auto grid w-5/6 gap-12 md:grid-cols-2">
        {/* ZX9 SPEAKER */}
        <div className="bg-primary-500 bg-circles overflow-hidden rounded-md bg-[length:525px_525px] bg-[center_top_-100px] bg-no-repeat px-8 py-20 md:col-span-2 md:bg-[length:775px_775px] md:bg-[center_top_-150px] xl:bg-[left_-175px_top_0px] xl:py-8 xl:bg-[length:925px_925px] min-[1440px]:bg-[length:1025px_1025px] min-[1440px]:bg-[left_-150px_top_0px]">
          <div className="mx-auto flex flex-col items-center justify-center xl:flex-row xl:justify-around min-[1440px]:w-[90%]">
            {/* IMAGE */}
            <div className="mx-auto w-3/5 pb-6 sm:w-2/5 xl:translate-y-[20%] xl:w-2/5 xl:translate-y-[15%]">
              <img
                src={getImageSize("primarySpeaker")}
                alt="ZX9 Speaker"
                className="xl:max-w-[285px] xl:max-w-[400px]"
              />
            </div>

            {/* TEXT AND BUTTON*/}
            <div className="text-center xl:w-1/2 xl:items-start xl:px-4 xl:text-left xl:mx-auto xl:w-2/5">
              <h2 className="py-6 text-4xl uppercase text-white sm:text-5xl">
                ZX9 Speaker
              </h2>
              <p className="pb-6 text-sm text-gray-100 sm:text-base">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className="transparent bg-black px-6 py-3 text-sm uppercase tracking-[1px] text-white hover:bg-neutral-700 sm:px-8 sm:py-4 sm:text-base xl:px-6 xl:py-3">
                See Product
              </button>
            </div>
          </div>
        </div>

        {/* ZX7 SPEAKER */}
        <div className="relative md:col-span-2">
          <img
            src={getImageSize("speaker")}
            alt="ZX7 Speaker"
            className="w-full rounded-md"
          />
          <div className="absolute top-[50%] translate-y-[-50%] p-6 sm:p-10 lg:px-16 min-[1440px]:px-24">
            <h2 className="pb-4 text-2xl uppercase text-black min-[480px]:text-3xl sm:pb-6 sm:text-4xl xl:pb-8 xl:text-5xl">
              ZX7 Speaker
            </h2>
            <button className="border-[1px] border-black bg-transparent px-4 py-2 text-sm uppercase tracking-[1px] text-black hover:bg-black hover:text-white sm:px-8 sm:py-4 sm:text-base">
              See Product
            </button>
          </div>
        </div>

        {/* YX1 EARPHONES IMAGE */}
        <div className="">
          <img
            src={getImageSize("earphones")}
            alt="YX1 Earphones"
            className="w-full rounded-md"
          />
        </div>

        {/* YX1 EARPHONES */}
        <div className="flex items-center rounded-md bg-gray-100">
          <div className="p-6 sm:p-10 lg:px-16 min-[1440px]:px-24">
            <h2 className="pb-4 text-2xl uppercase text-black min-[480px]:text-3xl sm:pb-6 sm:text-4xl xl:pb-8 xl:text-5xl">
              YX1 Earphones
            </h2>
            <button className="border-[1px] border-black bg-transparent px-4 py-2 text-sm uppercase tracking-[1px] text-black hover:bg-black hover:text-white sm:px-8 sm:py-4 sm:text-base">
              See Product
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FeaturedProducts;
