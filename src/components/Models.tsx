import { Product } from "../types";
import Preview from "./Preview";

type Props = {
  product: string;
  productData: Product[];
};

const Models = ({ product, productData }: Props) => {
  return (
    <div className="pt-[74px]">
      <div className="md:mb-8 xl:mb-16">
        <div className="bg-black py-8 text-center text-2xl uppercase tracking-[2px] text-white md:mb-8 xl:mb-16">
          <h1>{product}</h1>
        </div>
        {productData.map((item: Product, index) => (
          <Preview key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Models;
