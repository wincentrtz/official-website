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

export const PortofolioContent = styled.div`
  display: flex;
`;

export const ImageSection = styled.div`
  margin: 4vh 4vw;
  flex: 9;
`;

export const ContentSection = styled.div`
  margin: 4vh 4vw;
  flex: 10;
  text-align: left;
`;

export const PortofolioTitle = styled.h2`
  color: ${COLOR.FONT_PRIMARY};
`;

export const PortofolioCategoryTab = styled.div`
  border-style: solid;
  border-color: ${COLOR.FONT_PRIMARY};
  border-width: 2px;
  display: inline-block;
  padding: 0px 20px;
  margin-right: 10px;
  font-size: 0.9em;
`;

export const PortofolioDescription = styled.p`
  color: ${COLOR.FONT_SECONDARY};
  font-size: 0.9em;
`;

export const PortofolioButton = styled.button`
  background-color: ${COLOR.FONT_PRIMARY};
  color: ${COLOR.PRIMARY};
  font-weight: bold;
  border: none;
  padding: 10px 40px;
  border-radius: 5px;
`;
