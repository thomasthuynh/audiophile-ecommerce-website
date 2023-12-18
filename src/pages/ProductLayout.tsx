import { Outlet } from "react-router-dom";

import Categories from "../components/Categories";
import CompanyInfo from "../components/CompanyInfo";

const ProductLayout = () => {
  return (
    <div>
      <Outlet />
      <Categories />
      <CompanyInfo />
    </div>
  );
};

export default ProductLayout;
