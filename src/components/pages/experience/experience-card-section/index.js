import React from "react";

import ExperienceCard from "components/pages/experience/experience-card";
import { ExperienceCardContainer, ExperienceScrollWrapper } from "./style";

const ExperienceCardSection = () => (
  <ExperienceCardContainer>
    <ExperienceScrollWrapper>
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </ExperienceScrollWrapper>
  </ExperienceCardContainer>
);

export default ExperienceCardSection;
