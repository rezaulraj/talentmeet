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
import CustomizationSection from "./Customization";
import LoopSection from "./LoopSection";
import PricingSection from "./PricingSection";
import CTABanner from "./CTABanner";

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
      <CustomizationSection />
      <LoopSection />
      <PricingSection />
      <CTABanner />
    </div>
  );
};

export default Home;
