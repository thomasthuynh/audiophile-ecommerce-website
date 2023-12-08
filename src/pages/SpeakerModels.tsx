import ProductCategories from "../components/ProductCategories";
import CompanyInfo from "../components/CompanyInfo";
import ProductPreview from "../components/ProductPreview";

import { headphones } from "../assets/data";

type Props = {};

const ProductModels = ({}: Props) => {
  return (
    <div className="pb-16 pt-[74px]">
      <div>
        <h1 className="bg-black py-8 text-center text-2xl uppercase tracking-[2px] text-white">
          Headphones
        </h1>
      </div>
      {headphones.map((item) => (
        <ProductPreview key={item.id} item={item} />
      ))}
      <ProductCategories />
      <CompanyInfo />
    </div>
  );
};

export default ProductModels;
