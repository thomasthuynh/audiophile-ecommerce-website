import CompanyInfo from "../components/CompanyInfo";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Categories from "../components/Categories";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Featured />
      <CompanyInfo />
    </div>
  );
};

export default Home;
