import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const PortofolioContainer = styled.div`
  margin: 0px 8vw;
  text-align: center;
  @media (max-width: 1024px) {
    margin: 0px 2vw;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const TitleSection = styled.h1`
  color: ${COLOR.FONT_PRIMARY};
`;

export const DescriptionSection = styled.p`
  margin: 0px 16vw;
`;
