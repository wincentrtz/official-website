import styled from "styled-components";

export const NavbarContainer = styled.div`
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 92vw;
  z-index: 999;
`;
export const NavbarLeftSection = styled.div``;
export const NavbarRightSection = styled.div`
  display: flex;
`;
export const NavbarItem = styled.div`
  padding: 10px;
  margin-left: ${props => props.marginLeft}px;
`;
