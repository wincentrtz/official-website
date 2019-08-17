import React from "react";
import {
  NavbarContainer,
  NavbarLeftSection,
  NavbarRightSection
} from "./style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeftSection>Logo</NavbarLeftSection>
      <NavbarRightSection>Social Media Icon</NavbarRightSection>
    </NavbarContainer>
  );
};

export default Navbar;
