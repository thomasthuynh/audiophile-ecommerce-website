import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <header className="mx-auto h-[80vh] max-h-[1080px] max-w-[1920px] bg-black bg-heroImgSm bg-cover bg-center bg-no-repeat min-[480px]:h-[90vh] sm:h-[95vh] sm:bg-heroImgMd lg:h-screen xl:bg-heroImgLg">
      <motion.div
        className="wrapper flex h-full translate-y-[10%] items-center justify-center min-[400px]:translate-y-[5%] sm:w-4/6 md:translate-y-[2.5%] lg:translate-y-0 xl:w-5/6 xl:justify-start"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 100, x: 0 },
        }}
      >
        <div className="text-center sm:w-[90%] xl:w-2/5 xl:text-left">
          <span className="text-xs uppercase tracking-[10px] text-neutral-500 sm:text-base">
            New Product
          </span>
          <h1 className="pb-4 pt-4 text-4xl uppercase text-white sm:pb-8 sm:pt-6 sm:text-5xl lg:text-6xl">
            XX99 Mark II Headphones
          </h1>
          <p className="mx-auto pb-6 text-neutral-300 sm:w-[80%] sm:pb-8 sm:text-lg md:w-[90%] xl:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            to="/headphones/xx99-mark-two-headphones"
            className="inline-block bg-primary-500 px-6 py-3 text-sm uppercase tracking-[1px] text-white hover:bg-primary-300 sm:px-8 sm:py-4 sm:text-base"
          >
            See Product
          </Link>
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;
