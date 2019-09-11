import React from "react";

import ExperienceCardSection from "components/pages/experience/experience-card-section";
import { TitleSection, DescriptionSection, ExperienceContainer } from "./style";

const ExperiencePage = () => (
  <ExperienceContainer>
    <TitleSection>Experience Resume</TitleSection>
    <DescriptionSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      repellendus eveniet. Cumque necessitatibus, reprehenderit ratione aliquam
      alias repudiandae obcaecati, fugiat sint repellat laboriosam suscipit
      magnam eius soluta voluptatibus voluptatem molestiae.
    </DescriptionSection>
    <ExperienceCardSection />
  </ExperienceContainer>
);

export default ExperiencePage;
