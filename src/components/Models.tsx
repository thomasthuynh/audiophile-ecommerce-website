import { useEffect, useState } from "react";
import Preview from "./Preview";
import { Product } from "../types";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

type Props = {
  product: string;
  productData: Product[];
};

const Models = ({ product, productData }: Props) => {
  const [selectedProduct, setSelectedProduct] = useState<string>(product);

  const { pathname } = useLocation();

  useEffect(() => {
    setSelectedProduct(product);
  }, [pathname]);

  return (
    <div className="pt-[74px]">
      <div className="md:mb-8 xl:mb-16">
        {selectedProduct === product && (
          <motion.div
            className="w-full bg-black py-8 text-center text-2xl uppercase tracking-[2px] text-white md:mb-8 lg:py-12 lg:text-3xl xl:mb-16"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0, y: -100 },
              visible: { opacity: 100, y: 0 },
            }}
          >
            <h1>{product}</h1>
          </motion.div>
        )}

        {productData.map((item: Product, index) => (
          <Preview key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Models;
