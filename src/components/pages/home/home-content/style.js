import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const HelloSection = styled.h2`
  color: ${COLOR.SECONDARY};
`;
export const NameSection = styled.label`
  font-size: 3em;
  font-weight: bold;
  @media (max-width: 900px) {
    font-size: 2.3em;
  }
`;
export const NameLabel = styled.label`
  color: ${COLOR.SECONDARY};
`;
export const DescriptionSection = styled.p`
  color: ${COLOR.FONT_SECONDARY};
  margin-bottom: 60px;
  font-size: 0.9em;
`;
export const DownloadButton = styled.button`
  background-color: ${COLOR.SECONDARY};
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;
