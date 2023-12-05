import { useState } from "react";
import { SelectedPage } from "./types";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <div>
      <Nav selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <Home />
      <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
