import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const ContactHeaderContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50vw;
  padding: 5vh 12vw;
  margin-top: 20vh;
  @media (max-width: 768px) {
    width: 70vw;
  }
`;

export const ContactContentSection = styled.h2`
  flex: 2;
  margin-right: 1vw;
  font-weight: normal;
  @media (max-width: 768px) {
    font-size: 1em;
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
