import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const TitleSection = styled.h1`
  color: ${COLOR.FONT_PRIMARY};
`;

export const DescriptionSection = styled.p`
  margin: 0 12vw;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    display: none;
  }
`;
