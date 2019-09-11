import React from "react";

import HomeContent from "components/pages/home/home-content";
import { HomePageContainer, ImageSection, ContentSection } from "./style";

const HomePage = () => {
  return (
    <HomePageContainer>
      <ImageSection>Gambar Disini</ImageSection>
      <ContentSection>
        <HomeContent />
      </ContentSection>
    </HomePageContainer>
  );
};
export default HomePage;
