import styled from "styled-components";
import COLOR from "constants/apps/colors";

export const HelloSection = styled.h2`
  color: ${COLOR.SECONDARY};
`;
export const NameSection = styled.label`
  font-size: 3em;
  font-weight: bold;
`;
export const DescriptionSection = styled.h6``;
export const DownloadButton = styled.button`
  background-color: ${COLOR.SECONDARY};
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
`;
