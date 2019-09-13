import React from "react";

import {
  PortofolioContentContainer,
  ImageSection,
  ContentSection,
  PortofolioTitle,
  PortofolioDescription,
  PortofolioButton,
  PortofolioCategoryTab
} from "./style";

const CATEGORIES = ["java", "firebase"];

const PortofolioListSection = () => (
  <PortofolioContentContainer>
    <ImageSection>Image Disini</ImageSection>
    <ContentSection>
      <PortofolioTitle>Mobile Application for bla bla bla</PortofolioTitle>
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
  </PortofolioContentContainer>
);

const renderCategories = () =>
  CATEGORIES.map(category => (
    <PortofolioCategoryTab>{category}</PortofolioCategoryTab>
  ));

export default PortofolioListSection;
