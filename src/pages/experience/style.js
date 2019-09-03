import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const ExperienceContainer = styled.div`
  margin: 0px 8vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media (max-width: 1024px) {
    margin: 0px 2vw;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const TitleSection = styled.h2`
  color: ${COLOR.FONT_PRIMARY};
`;

export const DescriptionSection = styled.p``;

export const ExperienceCardContainer = styled.div`
  width: 75vw;
  display: flex;
  overflow: scroll;
  flex: 1;
  @media (max-width: 1024px) {
    width: 80vw;
  }
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const ExperienceScrollWrapper = styled.div`
  display: flex;
`;
