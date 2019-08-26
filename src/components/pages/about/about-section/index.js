import React from "react";
import {
  AboutContainer,
  ContentSection,
  TitleSection,
  DescriptionSection,
  ImageSection
} from "./style";
import { DownloadButton } from "./style";

const AboutSection = () => (
  <AboutContainer>
    <ContentSection>
      <TitleSection>- About Me</TitleSection>
      <DescriptionSection>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        repellendus eveniet. Cumque necessitatibus, reprehenderit ratione
        aliquam alias repudiandae obcaecati, fugiat sint repellat laboriosam
        suscipit magnam eius soluta voluptatibus voluptatem molestiae. <br />{" "}
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        repellendus eveniet.
      </DescriptionSection>
      <DownloadButton>DOWNLOAD CV</DownloadButton>
    </ContentSection>
    <ImageSection />
  </AboutContainer>
);

export default AboutSection;
