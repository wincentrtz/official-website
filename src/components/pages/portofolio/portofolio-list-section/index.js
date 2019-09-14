import React, { Fragment } from "react";
import { connect } from "react-redux";

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

const PortofolioListSection = ({ activeTab }) => {
  return (
    <PortofolioContentContainer>
      {renderPortfolioContent(activeTab)}
    </PortofolioContentContainer>
  );
};

const renderPortfolioContent = activeTab => (
  <Fragment>
    <ContentContainer isVisible={activeTab === "MOBILE"}>
      {portfolioContent("Mobile")}
    </ContentContainer>
    <ContentContainer isVisible={activeTab === "WEB"}>
      {portfolioContent("Web")}
    </ContentContainer>
    <ContentContainer isVisible={activeTab === "COMPETITION"}>
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
    <PortofolioCategoryTab key={category}>{category}</PortofolioCategoryTab>
  ));

const mapStateToProps = ({ portofolioReducers }) => {
  return {
    activeTab: portofolioReducers.activeTab
  };
};

export default connect(mapStateToProps)(PortofolioListSection);
