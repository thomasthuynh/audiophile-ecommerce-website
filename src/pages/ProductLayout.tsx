import { Outlet } from "react-router-dom";

import ProductCategories from "../components/ProductCategories";
import CompanyInfo from "../components/CompanyInfo";

const ProductLayout = () => {
  return (
    <div>
      <Outlet />
      <ProductCategories />
      <CompanyInfo />
    </div>
  );
};

export default ProductLayout;
