import React from "react";
import { TitleSection, DescriptionSection, PortofolioContainer } from "./style";
import PortofolioTabs from "components/pages/portofolio/portofolio-tabs";
import PortofolioListSection from "components/pages/portofolio/portofolio-list-section";

const Portofolio = () => (
  <PortofolioContainer>
    <TitleSection>Portofolio</TitleSection>
    <DescriptionSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      repellendus eveniet. Cumque necessitatibus, reprehenderit ratione aliquam
      alias repudiandae obcaecati.
    </DescriptionSection>
    <PortofolioTabs />
    <PortofolioListSection />
  </PortofolioContainer>
);

export default Portofolio;
