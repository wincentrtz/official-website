import React from "react";

import {
  NavbarContainer,
  NavbarLeftSection,
  NavbarRightSection,
  NavbarItem
} from "./style";

import Logo from "assets/images/logo.svg";
import Facebook from "assets/images/facebook.svg";
import LinkedIn from "assets/images/linkedin.svg";
import ClosedMenu from "assets/images/menu-closed.svg";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeftSection>
        <img src={Logo} />
      </NavbarLeftSection>
      <NavbarRightSection>
        <NavbarItem>
          <img src={Facebook} />
        </NavbarItem>
        <NavbarItem>
          <img src={LinkedIn} />
        </NavbarItem>
        <NavbarItem>
          <img src={ClosedMenu} />
        </NavbarItem>
      </NavbarRightSection>
    </NavbarContainer>
  );
};

export default Navbar;
