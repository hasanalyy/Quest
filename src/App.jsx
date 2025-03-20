import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Culture from "./components/layout/Culture";
import Chairman from "./components/layout/Chairman";
import FooterSection from "./components/layout/FooterSection";
import ProjectsSection from "./components/layout/ProjectsSection";
import DonationSection from "./components/layout/DonationSection";
import Apps from "./components/layout/Apps";
const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <Culture />
      <Chairman />
      <ProjectsSection />
      <DonationSection />
      <Apps />
      <FooterSection />
    </div>
  );
};

export default App;
