import { createGlobalStyle } from "styled-components";
import COLORS from "constants/apps/colors";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${COLORS.PRIMARY};
    color: white;
  }
`;
