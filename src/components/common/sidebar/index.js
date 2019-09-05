import React from "react";
import { connect } from "react-redux";

import { toggleSidebarMenu } from "store/sidebar/actions";
import { goToPage } from "store/page/actions";
import { SidebarItem, SidebarItemNoValue } from "./style";

const SIDEBAR_LIST = ["Home", "About", "Portfolio", "Resume", "Contact"];

const Sidebar = ({ isSidebarActive, currentPage, goToPage }) => {
  const renderSidebarItem = () =>
    SIDEBAR_LIST.map((item, index) =>
      isSidebarActive ? (
        <SidebarItem
          onClick={() => goToPage(index)}
          isActive={index === currentPage}
          key={item}
        >
          {item}
        </SidebarItem>
      ) : (
        <SidebarItemNoValue
          onClick={() => goToPage(index)}
          isActive={index === currentPage}
          key={item}
        />
      )
    );
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
    toggleSidebarMenu: () => dispatch(toggleSidebarMenu()),
    goToPage: page => dispatch(goToPage(page))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
