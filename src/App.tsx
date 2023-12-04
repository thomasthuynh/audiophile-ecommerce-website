import CompanyInfo from "./components/CompanyInfo";
import FeaturedProducts from "./components/FeaturedProducts";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
