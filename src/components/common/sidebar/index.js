import React from "react";
import { connect } from "react-redux";

import { toggleSidebarMenu } from "store/sidebar/actions";

import { SidebarItem, SidebarItemNoValue } from "./style";

const sidebarList = ["Home", "About", "Portfolio", "Resume", "Contact"];

const Sidebar = ({ isSidebarActive, currentPage }) => {
  const renderSidebarItem = () =>
    sidebarList.map((item, index) => {
      return isSidebarActive ? (
        <SidebarItem isActive={index === currentPage} key={item}>
          {item}
        </SidebarItem>
      ) : (
        <SidebarItemNoValue isActive={index === currentPage} key={item} />
      );
    });
  return renderSidebarItem();
};

const mapStateToProps = ({ sidebarReducers, pageReducers }) => {
  return {
    isSidebarActive: sidebarReducers.status,
    currentPage: pageReducers.currentPage
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
