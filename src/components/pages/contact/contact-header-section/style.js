import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const ContactHeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50vw;
  padding: 5vh 12vw;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

export const ContactContentSection = styled.div`
  flex: 4;
  margin-right: 1vw;
  @media (max-width: 768px) {
    fons-size: 0.6em;
  }
`;

export const ContactArrowSection = styled.h1`
  flex: 1;
  margin: 0;
  color: ${COLOR.FONT_PRIMARY};
  @media (max-width: 768px) {
    display: none;
  }
`;
