import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const ImageSection = styled.div`
  flex-grow: 1;
  max-width: 50%;
  margin: 20px;
  text-align: center;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const ContentSection = styled.div`
  flex-grow: 1;
  max-width: 35%;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;
