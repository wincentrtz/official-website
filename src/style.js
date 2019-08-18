import styled, { createGlobalStyle } from "styled-components";
import COLORS from "constants/apps/colors";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${COLORS.PRIMARY};
    color: white;
    padding: 0 40px;
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
`;
