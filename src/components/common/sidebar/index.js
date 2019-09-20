import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { toggleSidebarMenu } from "store/sidebar/actions";
import PAGES from "constants/apps/pages";
import {
  SidebarItem,
  SidebarItemLineOnly,
  SidebarContainer,
  SidebarLineOnlyWrapper
} from "./style";

const Sidebar = ({ isSidebarActive, history, location }) => {
  const pathname = location.pathname.substring(1);
  const page = PAGES[pathname] || PAGES["home"];
  const sidebarList = Object.keys(PAGES);
  const renderSidebarItem = () =>
    sidebarList.map((item, index) =>
      isSidebarActive ? (
        <SidebarItem
          onClick={() => handleGoToPage(index)}
          isActive={index === page.pageNumber}
          key={item}
        >
          {item}
        </SidebarItem>
      ) : (
        <SidebarLineOnlyWrapper
          key={item}
          onClick={() => handleGoToPage(index)}
        >
          <SidebarItemLineOnly isActive={index === page.pageNumber} />
        </SidebarLineOnlyWrapper>
      )
    );

  const handleGoToPage = index => {
    history.push({ pathname: sidebarList[index] });
  };
  return (
    <SidebarContainer isActive={isSidebarActive}>
      {renderSidebarItem()}
    </SidebarContainer>
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
)(withRouter(Sidebar));
