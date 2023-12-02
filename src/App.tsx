import CompanyInfo from "./components/CompanyInfo";
import FeaturedProducts from "./components/FeaturedProducts";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ProductCategories from "./components/ProductCategories";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <CompanyInfo />
    </div>
  );
}

export default App;
