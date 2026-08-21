import React from "react";
import HeroHome from "./HeroHome";
import FeaturesRow from "./FeaturesRow";
import Client from "./Cliend";
import WriteSection from "./WriteSection";
import Testimonial from "./Testimonial";
import ImagineSection from "./ImagineSection";
import AwardsSection from "./AwardsSection";
import TestimonialReverse from "./TestimonialReverse";
import PlanSection from "./PlanSection";
import OrganizeSection from "./OrganizeSection";
import Testimonial3 from "./Testimonial3";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <FeaturesRow />
      <Client />
      <WriteSection />
      <Testimonial />
      <ImagineSection />
      <AwardsSection />
      <TestimonialReverse />
      <PlanSection />
      <OrganizeSection />
      <Testimonial3 />
    </div>
  );
};

export default Home;
