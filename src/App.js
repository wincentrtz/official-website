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
import About from "./pages/about";

const PAGE = [<Home />, <About />, <Home />];

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
  PAGE.map((p, index) => (
    <PageContainer key={index}>
      <PageContent>{p}</PageContent>
    </PageContainer>
  ));

export default App;
