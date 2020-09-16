import React from "react";
import Header from "../components/header/Header";
import SectionA from "../components/section/SectionA";
import SectionB from "../components/section/SectionB";
import SectionC from "../components/section/SectionC";
import Footer from "../components/footer/Footer";
const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <SectionA />
      <SectionB />
      <SectionC />
      <Footer />
    </div>
  );
};

export default HomePage;
