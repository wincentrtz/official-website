import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContentSection = styled.div`
  flex-grow: 1;
  max-width: 40%;
  @media (max-width: 1000px) {
    max-width: 80%;
    text-align: center;
    align-self: center;
    margin-top: 100px;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

export const TitleSection = styled.h2`
  color: ${COLOR.FONT_PRIMARY};
`;

export const DescriptionSection = styled.p`
  color: ${COLOR.FONT_SECONDARY};
  font-size: 0.8em;
  margin: 30px 0px;
`;

export const ImageSection = styled.div`
  flex-grow: 1;
  max-width: 30%;
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const DownloadButton = styled.button`
  background-color: ${COLOR.FONT_PRIMARY};
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;
