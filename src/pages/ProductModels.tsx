import ProductCategories from "../components/ProductCategories";
import CompanyInfo from "../components/CompanyInfo";
import ModelCard from "../components/ModelCard";

import { headphones } from "../assets/data"

const ProductModels = () => {
  return (
    <div className="pt-[138px] pb-16">
      {
        headphones.map((item) => (
          <ModelCard key={item.id} item={item} />
        ))
      }
      <ProductCategories />
      <CompanyInfo />
    </div>
  );
};

export default ProductModels;
