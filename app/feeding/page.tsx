'use client'

import { useState } from "react";
import Image from "next/image";
import AboutSectionSix from "@/components/About/AboutSectionSix";
import AboutSectionFeeding from "@/components/About/AboutSectionFeeding";
import Breadcrumb from "@/components/Common/Breadcrumb";
// import WhyHero from "@/components/WhyHero";
// import backgroundImage from "../../public/images/features/int.jpg";

const AboutPage = () => {
  return (
    <>
      {/* <WhyHero /> */}
      <Breadcrumb
        pageName="Feeding"
        description="
        Shining Stars is a place for everyone, somewhere you can be yourself. Whether you're an out-of-the-box thinker, boundary-breaker or change-maker, this is where you'll get ahead and find your place as part of a global community.
        "
      />
      {/* <AboutSectionSix /> */}
      <AboutSectionFeeding />
    </>
  );
};

export default AboutPage;
