import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { toggleSidebarMenu } from "store/sidebar/actions";
import PAGES from "constants/apps/pages";
import { SidebarItem, SidebarItemNoValue } from "./style";

const Sidebar = ({ isSidebarActive, history, location }) => {
  const pathname = location.pathname.substring(1);
  const currentPage = PAGES[pathname].pageNumber;
  const sidebarList = Object.keys(PAGES);
  const renderSidebarItem = () =>
    sidebarList.map((item, index) =>
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
    history.push({ pathname: sidebarList[index] });
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
