import React from "react";

import HomeContent from "components/pages/home/HomeDetail";
import { HomePageContainer, ImageSection, ContentSection } from "./style";

const Home = () => (
  <HomePageContainer>
    <ImageSection>Gambar Disini</ImageSection>
    <ContentSection>
      <HomeContent />
    </ContentSection>
  </HomePageContainer>
);
export default Home;
