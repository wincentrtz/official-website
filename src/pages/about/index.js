import React from "react";
import AboutSection from "components/pages/about/about-section";
import FactSection from "../../components/pages/about/fact-section";

import { AboutPageContainer } from "./style";

const About = () => (
  <AboutPageContainer>
    <AboutSection />
    <FactSection />
  </AboutPageContainer>
);

export default About;
