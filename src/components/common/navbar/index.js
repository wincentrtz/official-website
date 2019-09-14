import React from "react";
import { connect } from "react-redux";

import { toggleSidebarMenu } from "store/sidebar/actions";
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

const Navbar = ({ toggleSidebarMenu, isSidebarActive }) => {
  const renderSidebarToggleIcon = () =>
    isSidebarActive ? ClosedMenu : OpenMenu;

  return (
    <NavbarContainer>
      <NavbarLeftSection src={Logo} />
      <NavbarRightSection>
        <NavbarItem src={Facebook} />
        <NavbarItem src={LinkedIn} />
        <NavbarItem
          marginLeft={60}
          onClick={toggleSidebarMenu}
          src={renderSidebarToggleIcon()}
        />
      </NavbarRightSection>
    </NavbarContainer>
  );
};

const mapStateToProps = ({ sidebarReducers }) => {
  return {
    isSidebarActive: sidebarReducers.status
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleSidebarMenu: () => dispatch(toggleSidebarMenu())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
