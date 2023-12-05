import CategoryProduct from "./CategoryProduct";

import Headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

const ProductCategories = () => {
  return (
    <section className="pt-24 pb-16">
      <div className="mx-auto grid w-5/6 gap-8 md:grid-cols-3">
        <CategoryProduct product="Headphones" image={Headphones} />
        <CategoryProduct product="Speakers" image={Speakers} />
        <CategoryProduct product="Earphones" image={Earphones} />
      </div>
    </section>
  );
};

export default ProductCategories;
