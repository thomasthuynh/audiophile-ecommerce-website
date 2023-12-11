import ProductCategories from "../components/ProductCategories";
import CompanyInfo from "../components/CompanyInfo";
import ModelList from "../components/ModelList";

import { Product } from "../types";

type Props = {
  product: string;
  productData: Product[];
};

const ProductModels = ({ product, productData }: Props) => {
  return (
    <div className="pb-16 pt-[74px]">
      <ModelList product={product} productData={productData}/>
      <ProductCategories />
      <CompanyInfo />
    </div>
  );
};

export default ProductModels;
