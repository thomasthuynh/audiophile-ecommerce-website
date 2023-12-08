import { useEffect } from "react";

import ProductCategories from "../components/ProductCategories";
import CompanyInfo from "../components/CompanyInfo";
import ModelCard from "../components/ModelCard";
import { SelectedPage } from "../types";

import { headphones } from "../assets/data";

type Props = {
  selectedPage: SelectedPage;
};

const ProductModels = ({ selectedPage }: Props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pb-16 pt-[74px]">
      <div>
        <h1 className="bg-black py-8 text-center text-2xl uppercase tracking-[2px] text-white">
          {selectedPage}
        </h1>
      </div>
      {headphones.map((item) => (
        <ModelCard key={item.id} item={item} />
      ))}
      <ProductCategories />
      <CompanyInfo />
    </div>
  );
};

export default ProductModels;
