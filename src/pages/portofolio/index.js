import React from "react";

import PortofolioTabsSection from "components/pages/portofolio/portofolio-tabs-section";
import PortofolioListSection from "components/pages/portofolio/portofolio-list-section";
import { TitleSection, DescriptionSection, PortofolioContainer } from "./style";

const PortofolioPage = () => (
  <PortofolioContainer>
    <TitleSection>Portofolio</TitleSection>
    <DescriptionSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      repellendus eveniet. Cumque necessitatibus, reprehenderit ratione aliquam
      alias repudiandae obcaecati.
    </DescriptionSection>
    <PortofolioTabsSection />
    <PortofolioListSection />
  </PortofolioContainer>
);

export default PortofolioPage;
