import CompanyInfo from "../components/CompanyInfo";
import FeaturedProducts from "../components/FeaturedProducts";
import Hero from "../components/Hero";
import ProductCategories from "../components/ProductCategories";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <CompanyInfo />
    </div>
  );
};

export default Home;
