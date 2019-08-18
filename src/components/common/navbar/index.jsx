import React, { useState } from "react";

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
import OpenMenu from "assets/images/menu-open.svg";

const Navbar = () => {
  const renderSidebarToggleIcon = () =>
    true ? <img src={ClosedMenu} /> : <img src={OpenMenu} />;

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
        <NavbarItem>{renderSidebarToggleIcon()}</NavbarItem>
      </NavbarRightSection>
    </NavbarContainer>
  );
};

export default Navbar;
