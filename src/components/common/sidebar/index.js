import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { toggleSidebarMenu } from "store/sidebar/actions";
import PAGES from "constants/apps/pages";
import { SidebarItem, SidebarItemNoValue } from "./style";

const SIDEBAR_LIST = ["Home", "About", "Portofolio", "Experience", "Contact"];

const Sidebar = ({ isSidebarActive, history, location }) => {
  const pathname = location.pathname.substring(1);
  const currentPage = PAGES[pathname].pageNumber;
  const renderSidebarItem = () =>
    SIDEBAR_LIST.map((item, index) =>
      isSidebarActive ? (
        <SidebarItem
          onClick={() => handleGoToPage(index)}
          isActive={index === currentPage}
          key={item}
        >
          {item}
        </SidebarItem>
      ) : (
        <SidebarItemNoValue
          onClick={() => handleGoToPage(index)}
          isActive={index === currentPage}
          key={item}
        />
      )
    );

  const handleGoToPage = index => {
    history.push({ pathname: SIDEBAR_LIST[index].toLowerCase() });
  };
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
)(withRouter(Sidebar));
