import styled, { createGlobalStyle } from "styled-components";
import COLORS from "constants/apps/colors";
import Sailec from "assets/fonts/sailec.otf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Sailect;
    src: url(${Sailec});
  }
  body {
    background-color: ${COLORS.PRIMARY};
    color: white;
    padding: 0 60px;
    font-family: Sailect;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  min-height: 80vh;
  align-items: center;
`;

export const PageContainer = styled.div`
  flex-grow: 9;
`;
export const SidebarContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
`;
