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
    font-family: Sailect;
    overflow: hidden;
    margin: 0;
  }
  ::-webkit-scrollbar {
    width: 0px;  /* Remove scrollbar space */
    background: transparent;  /* Optional: just make scrollbar invisible */
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
  right: 5%;
  @media (max-width: 768px) {
    display: none;
  }
`;
