import React, { Fragment } from "react";

import {
  PortofolioContentContainer,
  ImageSection,
  ContentSection,
  PortofolioTitle,
  PortofolioDescription,
  PortofolioButton,
  PortofolioCategoryTab,
  ContentContainer
} from "./style";

const CATEGORIES = ["java", "firebase"];

const ActiveContent = "MOBILE";

const PortofolioListSection = () => (
  <PortofolioContentContainer>
    {renderPortfolioContent()}
  </PortofolioContentContainer>
);

const renderPortfolioContent = () => (
  <Fragment>
    <ContentContainer isVisible={ActiveContent === "MOBILE"}>
      {portfolioContent("Mobile")}
    </ContentContainer>
    <ContentContainer isVisible={ActiveContent === "WEB"}>
      {portfolioContent("Web")}
    </ContentContainer>
    <ContentContainer isVisible={ActiveContent === "COMPETITION"}>
      {portfolioContent("Competition")}
    </ContentContainer>
  </Fragment>
);

const portfolioContent = title => (
  <Fragment>
    <ImageSection>Image Disini</ImageSection>
    <ContentSection>
      <PortofolioTitle>{title} Application for bla bla bla</PortofolioTitle>
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
  </Fragment>
);

const renderCategories = () =>
  CATEGORIES.map(category => (
    <PortofolioCategoryTab>{category}</PortofolioCategoryTab>
  ));

export default PortofolioListSection;
