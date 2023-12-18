import { Link } from "react-router-dom";

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

import Circles from "../assets/home/desktop/pattern-circles.svg";

const Featured = () => {
  return (
    <main className="py-16">
      <div className="mx-auto grid w-5/6 gap-8 md:grid-cols-2 xl:gap-12">
        {/* ZX9 SPEAKER */}
        <div className="overflow-hidden rounded-md bg-primary-500 px-8 py-20 md:col-span-2 xl:py-8">
          <div className="mx-auto flex flex-col items-center justify-center xl:flex-row xl:justify-around">
            {/* IMAGE */}
            <div className="relative mx-auto w-3/5 pb-6 sm:w-2/5 xl:w-2/5 xl:translate-y-[15%]">
              <picture>
                <source media="(min-width: 1280px)" srcSet={PrimarySpeakerLg} />
                <source media="(min-width: 768px)" srcSet={PrimarySpeakerMd} />
                <img
                  src={PrimarySpeakerSm}
                  alt="ZX9 Speaker"
                  className="relative z-10 mx-auto xl:max-w-[400px] 2xl:max-w-[450px]"
                />
              </picture>
              <img
                src={Circles}
                alt="Circles"
                className="absolute top-4 scale-[350%] xl:top-1/4 xl:scale-[225%]"
              />
            </div>

            {/* TEXT AND BUTTON*/}
            <div className="relative z-10 text-center xl:mx-auto xl:w-2/5 xl:items-start xl:px-4 xl:text-left">
              <h2 className="py-6 text-4xl uppercase text-white sm:text-5xl">
                ZX9 Speaker
              </h2>
              <p className="pb-6 text-sm text-gray-100 sm:text-base">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Link
                to="/speakers/zx9-speaker"
                className="transparent inline-block bg-black px-6 py-3 text-sm uppercase tracking-[1px] text-white hover:bg-neutral-700 sm:px-8 sm:py-4 sm:text-base xl:px-6 xl:py-3"
              >
                See Product
              </Link>
            </div>
          </div>
        </div>

        {/* ZX7 SPEAKER */}
        <div className="relative md:col-span-2">
          <picture>
            <source media="(min-width: 1280px)" srcSet={SpeakerLg} />
            <source media="(min-width: 768px)" srcSet={SpeakerMd} />
            <img
              src={SpeakerSm}
              alt="ZX7 Speaker"
              className="w-full rounded-md"
            />
          </picture>
          <div className="absolute top-[50%] translate-y-[-50%] p-6 sm:p-10 lg:px-16 min-[1440px]:px-24">
            <h2 className="pb-4 text-2xl uppercase text-black min-[480px]:text-3xl sm:pb-6 sm:text-4xl xl:pb-8 xl:text-5xl">
              ZX7 Speaker
            </h2>
            <Link
              to="/speakers/zx7-speaker"
              className="inline-block border-[1px] border-black bg-transparent px-4 py-2 text-sm uppercase tracking-[1px] text-black hover:bg-black hover:text-white sm:px-8 sm:py-4 sm:text-base"
            >
              See Product
            </Link>
          </div>
        </div>

        {/* YX1 EARPHONES IMAGE */}
        <div className="">
          <picture>
            <source media="(min-width: 1280px)" srcSet={EarphonesLg} />
            <source media="(min-width: 768px)" srcSet={EarphonesMd} />
            <img
              src={EarphonesSm}
              alt="YX1 Earphones"
              className="w-full rounded-md"
            />
          </picture>
        </div>

        {/* YX1 EARPHONES */}
        <div className="flex items-center rounded-md bg-gray-100">
          <div className="p-6 sm:p-10 lg:px-16 min-[1440px]:px-24">
            <h2 className="pb-4 text-2xl uppercase text-black min-[480px]:text-3xl sm:pb-6 sm:text-4xl xl:pb-8 xl:text-5xl">
              YX1 Earphones
            </h2>
            <Link
              to="/earphones/yx1-earphones"
              className="inline-block border-[1px] border-black bg-transparent px-4 py-2 text-sm uppercase tracking-[1px] text-black hover:bg-black hover:text-white sm:px-8 sm:py-4 sm:text-base"
            >
              See Product
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Featured;
