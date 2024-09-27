import React, { useEffect } from "react";
import "./App.css";

import FullScreen from "./sections/FullScreen";
import AboutUs from "./sections/AboutUs";
import OurGoals from "./sections/OurGoals";
import OurTasks from "./sections/OurTasks";
import OurEntitlements from "./sections/OurEntitlements";
import HowToBeMember from "./sections/HowToBeMember";
import Footer from "./sections/Footer";

import { scrollRegister } from "./Utils/ScrollAction/scrollAction";

function App() {
  useEffect(() => {
    scrollRegister();
  }, []);

  return (
    <>
      <FullScreen />
      <AboutUs />
      <OurGoals />
      <OurTasks />
      <OurEntitlements />
      <HowToBeMember />
      <Footer />
    </>
  );
}

export default App;
