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
    isSidebarActive ? <img src={ClosedMenu} /> : <img src={OpenMenu} />;

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
        <NavbarItem onClick={toggleSidebarMenu}>
          {renderSidebarToggleIcon()}
        </NavbarItem>
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
