import ProductPreview from "./ProductPreview";
import { Product } from "../types";

type Props = {
  product: string;
  productData: Product[];
};

const ModelList = ({ product, productData }: Props) => {
  return (
    <div>
      <div className="bg-black py-8 text-center text-2xl uppercase tracking-[2px] text-white md:py-12 md:text-3xl">
        <h1>{product}</h1>
      </div>
      <div className="py-16">
        {productData.map((item: Product, index) => (
          <ProductPreview key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ModelList;
