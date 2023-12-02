import CategoryProduct from "./CategoryProduct";

import Headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

type Props = {};

const ProductCategories = (props: Props) => {

  return (
    <section className="py-8">
      <div className="mx-auto w-5/6 md:flex justify-between">
        <CategoryProduct product="Headphones" image={Headphones} />
        <CategoryProduct product="Speakers" image={Speakers} />
        <CategoryProduct product="Earphones" image={Earphones} />
      </div>
    </section>
  );
};

export default ProductCategories;
