import styled, { createGlobalStyle } from "styled-components";
import COLOR from "constants/apps/colors";
import Sailec from "assets/fonts/sailec.otf";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Sailect;
    src: url(${Sailec});
  }
  body {
    background-color: ${COLOR.PRIMARY};
    color: white;
    padding: 0 60px;
    font-family: Sailect;
    @media (max-width: 768px) {
      padding: 0 20px;
    }
    overflow: hidden;
  }
`;

export const PageContainer = styled.div`
  display: table-row;
`;

export const PageContent = styled.div`
  display: table-cell;
  vertical-align: middle;
  height: 100vh;
  width: 100%;
`;

export const SidebarContainer = styled.div`
  position: absolute;
  top: 30%;
  right: 80px;
  @media (max-width: 768px) {
    display: none;
  }
`;
