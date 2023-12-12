import { useParams, Link } from "react-router-dom";
import { Product } from "../types";
import CompanyInfo from "../components/CompanyInfo";
import ProductCategories from "../components/ProductCategories";

type Props = {
  productData: Product[];
};

const ProductInfo = ({ productData }: Props) => {
  const { id } = useParams();

  const item = productData[0];

  return (
    <div className="pt-[74px]">
      <div className="mx-auto w-5/6">
        <Link to="/headphones">
          <div className="py-8 text-neutral-500">Go Back</div>
        </Link>

        <div>
          <picture>
            <source
              media="(min-width: 1280px)"
              srcSet={item.image.desktop}
            />
            <source
              media="(min-width: 768px)"
              srcSet={item.image.tablet}
            />
            <img
              src={item.image.mobile}
              alt="XX99 Mark II Headphones"
              className="w-full rounded-md"
            />
          </picture>
        </div>
      </div>

      <ProductCategories />
      <CompanyInfo />
    </div>
  );
};

export default ProductInfo;
