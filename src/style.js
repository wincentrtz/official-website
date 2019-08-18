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
    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }
`;

export const MainContainer = styled.div`
  display: flex;
  min-height: 80vh;
  align-items: center;
`;

export const PageContainer = styled.div``;
export const SidebarContainer = styled.div`
  position: absolute;
  right: 80px;
  @media (max-width: 768px) {
    display: none;
  }
`;
