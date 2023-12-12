import ProductCategories from "../components/ProductCategories";
import CompanyInfo from "../components/CompanyInfo";
ProductPreview;

import { Product } from "../types";
import ProductPreview from "../components/ProductPreview";

type Props = {
  product: string;
  productData: Product[];
};

const ProductModels = ({ product, productData }: Props) => {
  return (
    <div className="pt-[74px]">
      <div className="pb-16">
        <div className="mb-16 bg-black py-8 text-center text-2xl uppercase tracking-[2px] text-white md:py-12 md:text-3xl">
          <h1>{product}</h1>
        </div>
        {productData.map((item: Product, index) => (
          <ProductPreview key={item.id} item={item} index={index} />
        ))}
      </div>

      <ProductCategories />
      <CompanyInfo />
    </div>
  );
};

export default ProductModels;
