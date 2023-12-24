import BestGearSm from "../assets/shared/mobile/image-best-gear.jpg";
import BestGearMd from "../assets/shared/tablet/image-best-gear.jpg";
import BestGearLg from "../assets/shared/desktop/image-best-gear.jpg";

const CompanyInfo = () => {
  return (
    <section className="py-16">
      <div className="wrapper grid gap-8 xl:grid-cols-2">
        <div className="mx-auto max-w-[400px] md:max-w-none xl:order-2 xl:w-4/5">
          <picture>
            <source media="(min-width: 1280px)" srcSet={BestGearLg} />
            <source media="(min-width: 768px)" srcSet={BestGearMd} />
            <img
              src={BestGearSm}
              alt="Man wearing headphones"
              className="w-full rounded-md"
            />
          </picture>
        </div>

        <div className="mx-auto justify-center text-center md:w-[90%] xl:flex xl:w-4/5 xl:flex-col xl:text-left">
          {/* <div className="flex-col justify-center text-center xl:flex xl:text-left"> */}
          <h3 className="py-8 text-3xl uppercase xl:text-5xl">
            Bringing you the <span className="text-primary-500">best</span>{" "}
            audio gear
          </h3>
          <p className="text-neutral-500 xl:text-lg">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
