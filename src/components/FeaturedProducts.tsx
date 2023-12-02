import PrimarySpeakerSm from "../assets/home/mobile/image-speaker-zx9.png";
import SpeakerSm from "../assets/home/mobile/image-speaker-zx7.jpg";
import EarphonesSm from "../assets/home/mobile/image-earphones-yx1.jpg";
import Circles from "../assets/home/desktop/pattern-circles.svg";

type Props = {};

const FeaturedProducts = (props: Props) => {
  return (
    <main className="py-8">
      <div className="mx-auto grid w-5/6 gap-12">
        {/* ZX9 SPEAKER */}
        <div className="bg-primary-500 relative rounded-md px-8 py-20">
          <img src={Circles} className="absolute left-0 top-0 scale-150" />
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src={PrimarySpeakerSm}
              alt="ZX9 Speaker"
              className="z-10 w-1/2 pb-6"
            />
            <h2 className="py-6 text-4xl uppercase text-white sm:text-5xl">
              ZX9 Speaker
            </h2>
            <p className="pb-6 text-sm text-gray-100 sm:text-base">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <button className="border-[1px] border-black bg-black px-6 py-3 text-sm uppercase tracking-[1px] text-white hover:bg-transparent hover:text-black sm:px-8 sm:py-4 sm:text-base">
              See Product
            </button>
          </div>
        </div>

        {/* ZX7 SPEAKER */}
        <div className="relative">
          <img src={SpeakerSm} alt="ZX7 Speaker" className="rounded-md" />
          <div className="absolute top-[50%] translate-y-[-50%] p-6">
            <h2 className="pb-6 text-2xl uppercase text-black min-[480px]:text-3xl sm:text-4xl">
              ZX7 Speaker
            </h2>
            <button className="border-[1px] border-black bg-transparent px-4 py-2 text-sm uppercase tracking-[1px] text-black hover:bg-black hover:text-white sm:px-8 sm:py-4 sm:text-base">
              See Product
            </button>
          </div>
        </div>

        {/* YX1 EARPHONES IMAGE */}
        <div>
          <img src={EarphonesSm} alt="YX1 Earphones" className="rounded-md" />
        </div>

        {/* YX1 EARPHONES */}
        <div className="rounded-md bg-gray-100 py-20">
          <div className="pl-6">
            <h2 className="pb-6 text-2xl uppercase text-black min-[480px]:text-3xl sm:text-4xl">
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
