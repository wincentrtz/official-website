import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContentSection = styled.div`
  flex-grow: 1;
  max-width: 40%;
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
`;

export const DownloadButton = styled.button`
  background-color: ${COLOR.FONT_PRIMARY};
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;
