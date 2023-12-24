import Category from "./Category";

import Headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png";
import Speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png";
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png";

const Categories = () => {
  return (
    <section className="pb-16 pt-32">
      <div className="wrapper grid gap-8 md:grid-cols-3 md:gap-4">
        <Category product="headphones" image={Headphones} />
        <Category product="speakers" image={Speakers} />
        <Category product="earphones" image={Earphones} />
      </div>
    </section>
  );
};

export default Categories;
