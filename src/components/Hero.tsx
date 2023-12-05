

const Hero = () => {
  return (
    <header className="bg-heroImgSm md:bg-heroImgMd xl:bg-heroImgLg h-[65vh] bg-cover bg-center bg-no-repeat min-[400px]:h-[75vh] min-[480px]:h-[85vh] sm:h-[95vh] lg:h-screen">
      <div className="mx-auto flex h-full w-5/6 translate-y-[10%] items-center justify-center min-[400px]:translate-y-[5%] sm:w-4/6 md:translate-y-[2.5%] lg:translate-y-0 xl:w-5/6 xl:justify-start">
        <div className="text-center sm:w-[90%] xl:w-2/5 xl:text-left">
          <span className="text-xs uppercase tracking-[10px] text-neutral-500 sm:text-base">
            New Product
          </span>
          <h1 className="pb-6 pt-4 text-4xl uppercase text-white sm:pb-8 sm:pt-6 sm:text-6xl">
            XX99 Mark II Headphones
          </h1>
          <p className="mx-auto pb-6 text-neutral-300 sm:w-[80%] sm:pb-8 sm:text-lg md:w-[90%] xl:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="bg-primary-500 hover:bg-primary-300 px-6 py-3 text-sm uppercase tracking-[1px] text-white sm:px-8 sm:py-4 sm:text-base">
            See Product
          </button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
