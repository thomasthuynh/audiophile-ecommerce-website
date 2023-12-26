import { useEffect } from "react";

import CompanyInfo from "../components/CompanyInfo";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Categories from "../components/Categories";

type Props = {
  orderModal: boolean;
  setOrderModal: (value: boolean) => void;
};

const Home = ({ orderModal, setOrderModal }: Props) => {
  useEffect(() => {
    if (orderModal) {
      setOrderModal(false);
    }
  }, []);

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
