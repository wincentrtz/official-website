import React, { Fragment } from "react";

import Home from "pages/home";

import {
  GlobalStyle,
  PageContainer,
  SidebarContainer,
  PageContent
} from "./style";
import Navbar from "./components/common/navbar";
import Sidebar from "./components/common/sidebar";
import ScrollableContainer from "./components/common/scrollable-container";

const PAGE = [<Home />];

const App = () => (
  <Fragment>
    <GlobalStyle />
    <Navbar />
    <ScrollableContainer>{renderPage()}</ScrollableContainer>
    <SidebarContainer>
      <Sidebar />
    </SidebarContainer>
  </Fragment>
);

const renderPage = () =>
  PAGE.map(p => (
    <PageContainer>
      <PageContent>{p}</PageContent>
    </PageContainer>
  ));

export default App;
