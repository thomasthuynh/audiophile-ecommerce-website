import ProductCategories from "../components/ProductCategories";
import CompanyInfo from "../components/CompanyInfo";
import ProductPreview from "../components/ProductPreview";

import { Product } from "../types";

type Props = {
  product: string
  productData: Product[]
};

const ProductModels = ({ product, productData }: Props) => {
  return (
    <div className="pb-16 pt-[74px]">
      <div>
        <h1 className="bg-black py-8 text-center text-2xl uppercase tracking-[2px] text-white">
          {product}
        </h1>
      </div>
      {productData.map((item: Product) => (
        <ProductPreview key={item.id} item={item} />
      ))}
      <ProductCategories />
      <CompanyInfo />
    </div>
  );
};

export default ProductModels;
