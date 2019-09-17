import styled from "styled-components";

export const NavbarContainer = styled.div`
  margin: 20px 4vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 90vw;
  z-index: 999;
`;
export const NavbarLeftSection = styled.img`
  @media (max-width: 768px) {
    width: 30vw;
  }
`;
export const NavbarRightSection = styled.div`
  display: flex;
`;
export const NavbarItem = styled.img`
  padding: 10px;
  margin-left: ${props => props.marginLeft}px;
  @media (max-width: 768px) {
    margin-left: 0px;
    width: 7vw;
  }
`;
