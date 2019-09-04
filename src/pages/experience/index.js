import React from "react";
import {
  TitleSection,
  DescriptionSection,
  ExperienceContainer,
  ExperienceCardContainer,
  ExperienceScrollWrapper
} from "./style";
import ExperienceCard from "components/pages/experience/experience-card";

const Experience = () => (
  <ExperienceContainer>
    <TitleSection>Experience Resume</TitleSection>
    <DescriptionSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      repellendus eveniet. Cumque necessitatibus, reprehenderit ratione aliquam
      alias repudiandae obcaecati, fugiat sint repellat laboriosam suscipit
      magnam eius soluta voluptatibus voluptatem molestiae.
    </DescriptionSection>
    <ExperienceCardContainer>
      <ExperienceScrollWrapper>
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </ExperienceScrollWrapper>
    </ExperienceCardContainer>
  </ExperienceContainer>
);

export default Experience;
