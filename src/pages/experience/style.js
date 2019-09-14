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

export const DescriptionSection = styled.p`
  @media (max-width: 768px) {
    font-size: 0.6em;
    margin: 0 5vw;
  }
`;
