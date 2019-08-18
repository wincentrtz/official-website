import React from "react";
import { connect } from "react-redux";

import { toggleSidebarMenu } from "store/sidebar/actions";

import { SidebarItem, SidebarItemNoValue } from "./style";

const sidebarList = ["Home", "About", "Portfolio", "Resume", "Contact"];
const activeSidebar = "Home";

const Sidebar = ({ isSidebarActive }) => {
  const renderSidebarItem = () =>
    sidebarList.map(item =>
      isSidebarActive ? (
        <SidebarItem isActive={item === activeSidebar} key={item}>
          {item}
        </SidebarItem>
      ) : (
        <SidebarItemNoValue isActive={item === activeSidebar} key={item} />
      )
    );
  return renderSidebarItem();
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
)(Sidebar);
