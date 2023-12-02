import HeroImgSm from "../assets/home/mobile/image-header.jpg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <header className="bg-heroImgSm sm:bg-heroImgMd xl:bg-heroImgLg h-screen bg-cover bg-center">
      <div className="mx-auto flex h-full w-5/6 items-center justify-center sm:w-4/6 xl:w-5/6 xl:justify-start ">
        <div className="text-center sm:w-[90%] xl:w-2/5 xl:text-left">
          <span className="text-xs tracking-[10px] text-neutral-500 sm:text-base">
            NEW PRODUCT
          </span>
          <h1 className="pb-6 pt-4 text-4xl text-white sm:pb-8 sm:pt-6 sm:text-6xl">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="mx-auto pb-6 text-neutral-300 sm:w-[80%] sm:pb-8 sm:text-lg xl:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-primary-500 hover:bg-primary-300 px-6 py-3 text-sm tracking-[1px] text-white sm:px-8 sm:py-4 sm:text-base">
            SEE PRODUCT
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
