import React from "react";
import {
  TitleSection,
  DescriptionSection,
  PortofolioContainer,
  PortofolioContent,
  ImageSection,
  ContentSection,
  PortofolioTitle,
  PortofolioDescription,
  PortofolioButton,
  PortofolioCategoryTab
} from "./style";
import PortofolioTabs from "components/pages/portofolio/portofolio-tabs";

const CATEGORIES = ["java", "firebase"];

const Portofolio = () => (
  <PortofolioContainer>
    <TitleSection>Portofolio</TitleSection>
    <DescriptionSection>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      repellendus eveniet. Cumque necessitatibus, reprehenderit ratione aliquam
      alias repudiandae obcaecati.
    </DescriptionSection>
    <PortofolioTabs />
    <PortofolioContent>
      <ImageSection>Image Disini</ImageSection>
      <ContentSection>
        <PortofolioTitle>Mobile app bla bla bla</PortofolioTitle>
        {renderCategories()}
        <PortofolioDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          repellendus eveniet. Cumque necessitatibus, reprehenderit ratione
          aliquam alias repudiandae obcaecati, fugiat sint repellat laboriosam
          suscipit magnam eius soluta voluptatibus voluptatem molestiae. <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          repellendus eveniet. Cumque necessitatibus, reprehenderit ratione
          aliquam alias repudiandae obcaecati, fugiat sint repellat laboriosam
          suscipit magnam eius soluta voluptatibus voluptatem molestiae.
        </PortofolioDescription>
        <PortofolioButton>Learn More</PortofolioButton>
      </ContentSection>
    </PortofolioContent>
  </PortofolioContainer>
);

const renderCategories = () =>
  CATEGORIES.map(category => (
    <PortofolioCategoryTab>{category}</PortofolioCategoryTab>
  ));

export default Portofolio;
