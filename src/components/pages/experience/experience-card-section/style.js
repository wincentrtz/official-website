import styled from "styled-components";

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
